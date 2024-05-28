import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import OutsideClickHandler from 'react-outside-click-handler';
import { Select } from '../select/index.jsx';
import { useDidUpdateEffect } from '../../utils/hooks';
import styles from './index.module.scss';
import { Search } from '../search/index.jsx';

export const VesselFilter = (props) => {
  const {
    groups = [], options = [], onChange, onGroupChange, className = '', value, hideVesselDropdown,
    hideVesselDropdownChildren, childEmptyMessage
  } = props;

  const [selected, setSelected] = useState(value || []);
  const [search, setSearch] = useState('');
  const [vesselSelectOpen, setVesselSelectOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(groups?.length ? groups[0] : null);

  const valueString = useMemo(() => {
    return JSON.stringify(value);
  }, [value]);

  const selectedString = useMemo(() => {
    return JSON.stringify(selected);
  }, [selected]);

  useDidUpdateEffect(() => {
    if (onChange) onChange({ selected, search });
  }, [selectedString, search]);

  useDidUpdateEffect(() => {
    if (onGroupChange) onGroupChange(selectedGroup);
  }, [selectedGroup]);

  useEffect(() => {
    if (valueString !== selectedString) {
      setSelected(value);
    }
  }, [valueString]);

  return (
    <div className={`${styles.vessel_filter} ${className}`}>
      <Search
        className={styles.filter}
        onSearchEnter={setSearch}
        autoSearch
        allowClear
      />
      <Select
        onChange={(e) => setSelectedGroup(e)}
        className={styles.filter}
        value={selectedGroup}
        options={groups}
      />
      {!hideVesselDropdown
        ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (vesselSelectOpen) setVesselSelectOpen(false);
            }}
          >
            <div
              className={styles.filter}
              onClick={() => {
                setVesselSelectOpen((prev) => !prev);
              }}
            >
              <Select
                isMulti
                menuIsOpen={vesselSelectOpen}
                closeMenuOnSelect={false}
                isSearchable={false}
                onChange={(value) => setSelected(value)}
                maxMenuHeight="30rem"
                options={options}
                placeholder="Select"
                captureMenuScroll={false}
                value={value}
                hideChildren={hideVesselDropdownChildren}
                childEmptyMessage={childEmptyMessage}
              />
            </div>
          </OutsideClickHandler>
        )
        : null}
    </div>
  );
};
