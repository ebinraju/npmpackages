import React, { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Select } from '../select/index.jsx';
import styles from './index.module.scss';
import LeftArrow from '../../icons/chevronLeft.jsx';
import RightArrow from '../../icons/chevronRight.jsx';

export const Pagination = (props) => {
  const {
    className = '', forcePage = 1,
    pageSize: pageSizeProp = 10,
    onPageSizeChange, onPageChange, totalCount = 0,
    ...rest
  } = props;

  const [pageSize, setPageSize] = useState({ value: pageSizeProp, label: pageSizeProp });
  const [page, setPage] = useState(forcePage);

  const pageCount = useMemo(() => {
    return Math.ceil(totalCount / pageSize?.value);
  }, [totalCount, pageSize]);

  const [start, end] = useMemo(() => {
    const endCount = (page * pageSize?.value);
    return [
      ((page - 1) * pageSize?.value) + 1,
      page === pageCount ? totalCount : endCount
    ]
  }, [pageSize, page, totalCount]);

  useEffect(() => {
    if (pageSizeProp !== pageSize.value) {
      setPageSize(pageSizeProp);
    }
  }, [pageSizeProp]);

  useEffect(() => {
    if (forcePage !== page) {
      setPage(forcePage);
    }
  }, [forcePage]);

  return (
    <div className={styles.pagination_wrap}>
      <div className={styles.pagesize_wrapper}>
        <Select
          isSearchable={false}
          value={pageSize}
          options={[
            { value: 10, label: 10 },
            { value: 25, label: 25 },
            { value: 50, label: 50 }
          ]}
          onChange={(value) => {
            setPageSize(value);
            setPage(1);
            if (onPageSizeChange) onPageSizeChange(value?.value)
          }}
          formatOptionLabel={(option) => {
            return (
              <div className={styles.pagesize}>
                {option.value}
                <span>&nbsp;/ page</span>
              </div>
            );
          }}
          size="small"
          menuPlacement="top"
        />
        <div className={styles.page_count}>
          {`${start} - ${end} of ${totalCount} records`}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<RightArrow data-testid="pagination_right_arrow" />}
        pageRangeDisplayed={3}
        previousLabel={<LeftArrow data-testid="pagination_left_arrow" />}
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageClassName={styles.page}
        activeClassName={styles.active}
        previousClassName={styles.page}
        nextClassName={styles.page}
        breakClassName={styles.break}
        disabledClassName={styles.disabled}
        disableInitialCallback
        forcePage={page ? page - 1 : undefined}
        onPageChange={({ selected }) => {
          setPage(selected + 1);
          onPageChange(selected + 1)
        }}
        {...rest}
        pageCount={pageCount}
      />
    </div>
  );
};
