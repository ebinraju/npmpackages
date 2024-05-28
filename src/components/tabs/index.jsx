import React, { useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useResizeObserver } from '../../utils/hooks';
import { Tooltip } from '../tooltip/index.jsx';
import CaretDown from '../../icons/caretDown.jsx';
import styles from './index.module.scss';

export const Tabs = (props) => {
  const {
    tabs = [], defaultActive, active: activeProp, onActiveChange, className = '', extra
  } = props;

  const [active, setActive] = useState(activeProp || defaultActive || (tabs?.length ? tabs[0].key : null));
  const [overflowingTabs, setOverflowingTabs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trapRightRef = useRef();
  const trapLeftRef = useRef();
  const ref = useRef();

  const { width } = useResizeObserver(ref);

  const calculateOverflowingTabs = () => {
    const parent = ref.current;
    const leftTrap = trapLeftRef.current;
    const rightTrap = trapRightRef.current;

    const children = Array.from(parent?.childNodes);

    const trapLeftBound = leftTrap.getBoundingClientRect().right;
    const trapRightBound = rightTrap.getBoundingClientRect().left;
    const overflow = [];

    children.forEach((tab) => {
      if (Math.floor(tab.getBoundingClientRect().right) > trapRightBound
        || Math.floor(tab.getBoundingClientRect().left) < trapLeftBound) {
        overflow.push(tab.getAttribute('data-tab-key'));
      }
    });
    return overflow;
  };

  useEffect(() => {
    let timeout;
    if (trapRightRef?.current && ref?.current && tabs?.length && active) {
      const parent = ref.current;
      const children = Array.from(parent.childNodes);
      const activeChild = children.find((child) => child.getAttribute('data-tab-key') === String(active));
      if (activeChild) {
        const parentRect = parent.getBoundingClientRect();
        const childRect = activeChild.getBoundingClientRect();
        const parentScrollLeft = parent.scrollLeft;

        if (childRect.left < parentRect.left) {
          // Scroll left to bring the active child into view
          parent.scrollLeft = parentScrollLeft - (parentRect.left - childRect.left);
        } else if (childRect.right > parentRect.right) {
          // Scroll right to bring the active child into view
          parent.scrollLeft = parentScrollLeft + (childRect.right - parentRect.right);
        }
      }
      timeout = setTimeout(() => {
        requestAnimationFrame(() => {
          setOverflowingTabs(calculateOverflowingTabs());
        });
      }, 150);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    }
  }, [width, trapRightRef?.current, ref?.current, JSON.stringify(tabs), active]);

  useEffect(() => {
    if (activeProp && activeProp !== active) setActive(activeProp);
  }, [activeProp]);

  return (
    <div className={`${styles.wrapper} ${className}`} >
      <div ref={trapLeftRef} className={styles.left_trap} />
      <div className={styles.content} ref={ref}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            data-tab-key={tab.key}
          >
            <div
              key={tab.key}
              className={styles.tab}
              data-active={active === tab.key}
              onClick={() => {
                if (onActiveChange) onActiveChange(tab.key);
                if (!activeProp) setActive(tab.key);
              }}
            >
              <span>{tab.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.extra} ref={trapRightRef}>
        {overflowingTabs?.length
          ? (
            <OutsideClickHandler
              onOutsideClick={() => setDropdownOpen(false)}
            >
              <Tooltip
                visible={dropdownOpen}
                title={(
                  <div>
                    {tabs
                      .filter((item) => overflowingTabs.includes(String(item.key)))
                      .map((item) => (
                        <div
                          key={item.key}
                          className={styles.menu_item}
                          onClick={() => {
                            setActive(item.key);
                            setDropdownOpen(false);
                          }}
                        >
                          {item.title}
                        </div>
                      ))}
                  </div>
                )}
                placement="bottomRight"
                showArrow={false}
                trigger="click"
              >
                <div className={styles.dropdown} onClick={() => setDropdownOpen(true)}>
                  <CaretDown className={styles.caret} />
                </div>
              </Tooltip>
            </OutsideClickHandler>
          )
          : null}
        <div className={styles.extra_wrapper}>
          {extra}
        </div>
      </div>
    </div>
  );
};
