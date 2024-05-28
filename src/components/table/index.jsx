import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useDidUpdateEffect, useResizeObserver } from '../../utils/hooks.js';
import SortUp from '../../icons/sortUp.jsx';
import SortDefault from '../../icons/sortDefault.jsx';
import styles from './index.module.scss';

const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc'
};

export const DataTable = (props) => {
  const {
    columns, dataSource = [], keyField = 'id', defaultSort = { sortOrder: 'asc' }, onSort,
    className = '', onRowClick, activeDataField, activeDataFieldException = [], stickyColumns, type
  } = props;

  const [sort, setSort] = useState(defaultSort);
  const [leftStickyPositions, setLeftStickyPositions] = useState([]);

  const headerRef = useRef();
  const tableRef = useRef();
  const { width } = useResizeObserver(headerRef);

  const handleSort = (field) => {
    setSort((prev) => ({
      sortField: field,
      sortOrder: field === sort.sortField && prev.sortOrder === SORT_ORDER.ASC ? 'desc' : 'asc'
    }));
  };

  useEffect(() => {
    const value = [];
    if (tableRef?.current && headerRef.current && stickyColumns > 0) {
      const children = Array.from(headerRef.current.childNodes);
      for (let i = 0; i < stickyColumns; i += 1) {
        if (i === 0) {
          value.push(0);
        } else {
          const bounds = children[i - 1].getBoundingClientRect();
          const parentBounds = tableRef?.current.getBoundingClientRect();
          value.push(bounds.right - parentBounds.left -1);
        }
      }
      setLeftStickyPositions(value);
    } else {
      setLeftStickyPositions([]);
    }
  }, [stickyColumns, tableRef?.current, headerRef?.current, JSON.stringify(dataSource), width, JSON.stringify(columns)]);

  useDidUpdateEffect(() => {
    if (onSort) onSort(sort);
  }, [sort]);

  return (
    <Table className={className} type={type} ref={tableRef}>
      <Thead>
        <Tr ref={headerRef}>
          {columns.map((column, index) => {
            const { align = 'center' } = column;
            return (
              <Th
                key={column.dataField}
                align={align}
                onClick={() => column.sortable && handleSort(column.dataField)}
                sortable={column.sortable}
                sortDirection={sort.sortField === column.dataField && sort.sortOrder}
                data-is-active={activeDataField && column.dataField === activeDataField}
                data-is-active-exception={activeDataField && activeDataFieldException.includes(column.dataField)}
                data-is-sticky={!Number.isNaN(Number(leftStickyPositions[index]))}
                style={{
                  position: !Number.isNaN(Number(leftStickyPositions[index])) ? 'sticky' : undefined,
                  left: !Number.isNaN(Number(leftStickyPositions[index])) ? leftStickyPositions[index] : undefined,
                  borderRight: !Number.isNaN(Number(leftStickyPositions[index])) && index === leftStickyPositions.length - 1
                    ? '1px solid #D2D3D4'
                    : ''
                }}
              >
                {typeof column.title === 'function' ? column.title() : column.title}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {dataSource.map((item, index) => (
          <Tr
            key={item[keyField]}
            onClick={() => {
              if (onRowClick) onRowClick(item, index);
            }}
            className={onRowClick ? styles.clickable : ''}
          >
            {columns.map((column, ix) => {
              const { align = 'center' } = column;
              return (
                <Td
                  key={column.dataField}
                  align={align}
                  data-is-active={activeDataField && column.dataField === activeDataField}
                  data-is-active-exception={activeDataField && activeDataFieldException.includes(column.dataField)}
                  data-is-sticky={!Number.isNaN(Number(leftStickyPositions[ix]))}
                  style={{
                    position: !Number.isNaN(Number(leftStickyPositions[ix])) ? 'sticky' : undefined,
                    left: !Number.isNaN(Number(leftStickyPositions[ix])) ? leftStickyPositions[ix] : undefined,
                    borderRight: !Number.isNaN(Number(leftStickyPositions[ix])) && ix === leftStickyPositions.length - 1
                      ? '1px solid #D2D3D4'
                      : ''
                  }}
                >
                  {column.render ? column.render(item) : item[column.dataField]}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export const Table = forwardRef((props, ref) => {
  const { className, children, type, ...rest } = props;

  return (
    <div className={`${styles.wrapper} ${className}`} ref={ref}>
      <table className={`${styles.table} ${type === 'primary' ? styles.primary_table : ''}`} {...rest}>
        {children}
      </table>
    </div>
  );
});

export const Thead = (props) => {
  const { children, ...rest } = props;

  return (
    <thead {...rest}>
      {children}
    </thead>
  );
};

export const Tbody = (props) => {
  const { children, ...rest } = props;

  return (
    <tbody {...rest}>
      {children}
    </tbody>
  );
};

export const Tr = forwardRef((props, ref) => {
  const { children, ...rest } = props;

  return (
    <tr {...rest} ref={ref}>
      {children}
    </tr>
  );
});

export const Th = (props) => {
  const { children, sortable, sortDirection, align = 'center', ...rest } = props;

  const renderSortIcon = () => {
    if (sortDirection) {
      return <SortUp />
    }
    return <SortDefault />
  };

  return (
    <th
      {...rest}
      data-sort-direction={sortDirection}
      data-sortable={sortable}
      align={align}
    >
      <div className={styles.title_wrap}>
        {children}
        {sortable
          ? (
            renderSortIcon()
          ) : null}
      </div>
    </th>
  );
};

export const Td = (props) => {
  const { children, align = 'center', ...rest } = props;

  return (
    <td {...rest} align={align}>
      {children}
    </td>
  );
};
