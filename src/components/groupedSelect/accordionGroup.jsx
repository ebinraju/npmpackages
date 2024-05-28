import React, { useMemo } from "react";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import _ from "lodash";
import CaretDownIcon from "../../icons/caretDown2.jsx";
import { Checkbox } from "../checkbox/index.jsx";
import { Empty } from '../empty/index.jsx';
import ArrowUp from "../../icons/arrowUp.jsx";
import CommentIcon from "../../icons/comment.jsx";
import styles from "./index.module.scss";
import SortUp from "../../icons/sortUp.jsx";

const Group = (props) => {
  const {
    option, selectOption, value = [], setValue, childEmptyMessage, showComment, onCommentClick, formatIndexValue
  } = props;
  const isAllOptionsChecked = useMemo(() => {
    return (
      option.options?.length
        ? option.options.every(
          (item) => !!value?.find((foo) => foo.value === item.value)
        )
        : false
    );
  }, [value, option]);

  const isSomeOptionsChecked = useMemo(() => {
    return (
      option.options?.length
        ? option.options.some(
          (item) => !!value?.find((foo) => foo.value === item.value)
        )
        : false
    );
  }, [value, option]);

  const isOptionSelected = (op) => {
    return !!value?.find((item) => item.value === op.value);
  };

  const selectAll = (event) => {
    if (!event.target.checked) {
      const copy = [...value];
      _.remove(
        copy,
        (item) => !!option.options.find((op) => item.value === op.value)
      );
      setValue(copy);
    } else {
      const newValue = _.unionBy(value, option.options, (item) => item.value);
      setValue(newValue);
    }
  };

  return (
    <>
      <Header>
        <Trigger className={styles.group_header_wrapper}>
          <div className={styles.group_header}>
            <Checkbox
              aria-label={option.label}
              readOnly
              color="primary"
              checked={isAllOptionsChecked}
              indeterminate={!isAllOptionsChecked && isSomeOptionsChecked}
              onClick={selectAll}
            />
            {option.label}
          </div>
          <CaretDownIcon className={styles.group_header_icon} />
        </Trigger>
      </Header>
      <Content className={styles.group_content}>
        {option.options?.length
          ? option.options?.map((item) => (
            <div
              key={item.value}
              className={styles.group_option_item}
              onClick={() => {
                selectOption(item);
              }}
            >
              {showComment && item.showComment
                ? (
                  <CommentIcon
                    className={styles.comment_icon}
                    onClick={(event) => {
                      event.stopPropagation();
                      onCommentClick(item);
                    }}
                  />
                ) : null}
              <div className={styles.group_item_select}>
                <Checkbox
                  aria-label={item.label}
                  readOnly
                  color="primary"
                  checked={isOptionSelected(item)}
                  onClick={() => selectOption(item)}
                />
                {item.label}
              </div>

              <div className={styles.group_item_index} data-delta={item.delta}>
                {
                  formatIndexValue ? (
                    formatIndexValue(item)
                  ) : (
                    <>
                      <div>{item.index}</div>
                      <div className={styles.delta_arrow}>
                        <ArrowUp />
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          ))
          : (
            <Empty title={childEmptyMessage} />
          )}
      </Content>
    </>
  );
};

export const AccordionGroup = (props) => {
  const {
    selectOption,
    selectProps,
    setValue,
    options,
    onSortClick,
    sortOrder,
    formatIndexValue,
    title = 'Vessels',
    valueTitle = 'Index',
    emptyMessage,
    ...rest
  } = props;

  const { value } = selectProps;

  const flatOptions = useMemo(() => {
    return _.flatten(options.map((item) => item.options));
  }, [options]);

  const selectAll = () => {
    if (flatOptions?.length === value?.length) {
      setValue([]);
    } else {
      setValue(flatOptions);
    }
  };

  return (
    <>
      <div className={styles.menu_list_select_all}>
        <div className={styles.checkbox}>
          <Checkbox
            aria-label="select-all"
            color="primary"
            checked={
              flatOptions?.length && flatOptions?.length === value?.length
            }
            indeterminate={
              value?.length > 0 && value?.length < flatOptions?.length
            }
            readOnly
            onClick={() => flatOptions?.length && selectAll()}
          />
          {title}
        </div>
        <div
          className={styles.index_sort}
          onClick={onSortClick}
          data-sort={sortOrder}
        >
          {valueTitle}
          <SortUp />
        </div>
      </div>
      <Root
        className={styles.groups_wrapper}
        defaultValue={(options?.length && options[0]?.key) || 1}
        collapsible
      >
        {!options?.length
          ? (
            <Empty title={emptyMessage} className={styles.empty} />
          )
          : options?.map((option, index) => (
            <Item
              key={option.key || index + 1}
              value={option.key || index + 1}
              className={styles.group}
            >
              <Group
                option={option}
                selectOption={selectOption}
                value={value}
                setValue={setValue}
                formatIndexValue={formatIndexValue}
                {...rest}
              />
            </Item>
          ))}
      </Root>
    </>
  );
};
