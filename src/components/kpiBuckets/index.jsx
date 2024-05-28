import React, { useState, useEffect, useRef } from 'react';
import ArrowUp from '../../icons/arrowUp.jsx';
import { useDidUpdateEffect, useResizeObserver } from '../../utils/hooks.js';
import styles from './index.module.scss';

export const KpiBuckets = (props) => {
  const {
    buckets, formatTitle, defaultActive, onActiveChange, className = '',
    isMulti, value
  } = props;

  const [active, setActive] = useState(value || isMulti ? [defaultActive] : defaultActive);

  const handleActiveChange = (code) => {
    if (!isMulti) {
      if (!value) {
        setActive(code);
      }
      if (onActiveChange) onActiveChange(code);
    } else {
      setActive((prev) => {
        const copy = [...prev];
        const index = copy.findIndex((item) => item === code);
        if (index > -1) {
          if (copy.length > 1) copy.splice(index, 1);
        } else {
          copy.push(code);
        }
        if (onActiveChange) onActiveChange(copy);
        if (value) {
          return prev;
        }
        return copy;
      });
    }
  };

  const isActive = (code) => {
    if (isMulti) return active.includes(code);
    return active === code;
  };

  useDidUpdateEffect(() => {
    if (isMulti === true) {
      setActive((prev) => {
        if (prev) {
          if (onActiveChange) onActiveChange([prev]);
          return [prev];
        }
        const val = buckets?.length ? [buckets[0].code] : defaultActive ? [defaultActive] : [];
        if (onActiveChange) onActiveChange(val);
        return val;
      });
    } else {
      setActive((prev) => {
        if (Array.isArray(prev)) {
          if (onActiveChange) onActiveChange(prev[0]);
          return prev[0];
        }
        const val = buckets?.length ? buckets[0].code : defaultActive ? defaultActive : null;
        if (onActiveChange) onActiveChange(val);
        return val;
      });
    }
  }, [isMulti]);

  useEffect(() => {
    if (value) {
      setActive(value);
    }
  }, [JSON.stringify(value)]);

  return (
    buckets?.length
      ? (
        <div className={`${styles.kpi_buckets} ${className}`}>
          {buckets.map((item) => (
            <div
              key={item.code}
              className={`${styles.bucket_item} ${isActive(item.code) ? styles.active : ''}`}
              onClick={() => handleActiveChange(item?.code)}
            >
              <Title
                title={formatTitle ? formatTitle(item.name) : item.name}
              />
              <div className={styles.bucket_metrics}>
                <div
                  className={styles.value}
                  data-delta={item.delta || '0'}
                  data-configuration={item.configuration}
                >
                  <ArrowUp />
                  {item.value || 0}
                </div>
                {!item.hideWeight
                  ? (
                    <div className={styles.weight}>
                      {`${item.weightage || 0}%`}
                    </div>
                  ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null
  );
};

const Title = (props) => {
  const { title } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef();
  const { width } = useResizeObserver(ref);

  useEffect(() => {
    if (ref?.current) {
      if (ref.current.offsetHeight < ref.current.scrollHeight) {
        setShowTooltip(true);
      } else {
        setShowTooltip(false);
      }
    }
  }, [ref?.current, title, width]);

  return (
    <div className={styles.bucket_name} ref={ref} title={showTooltip ? title : null}>
      {title}
    </div>
  );
};
