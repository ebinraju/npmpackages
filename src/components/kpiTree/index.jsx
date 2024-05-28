import React from 'react';
import KpiAccordion from './kpiAccordion.jsx';
import Search from './search.jsx';
import styles from './index.module.scss';
import ArrowUp from '../../icons/arrowUp.jsx';
import { Pulse } from '../pulse/index.jsx';
import { Empty } from '../empty/index.jsx';

export const KpiTree = (props) => {
  const {
    kpiBucket: bucket = {}, kpis = [], formatKpiValue, className,
    onSearchEnter, loading, noDataText = 'No data found!', showWeight = true,
    hasCustomHeader = false, customHeader = (bucket) => { return null },
    customTreeHeader, forceValue, isHighlighted = false, onCommentClick
  } = props;

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (!kpis?.length) {
      return <Empty title={noDataText} className={styles.nodata} />;
    }
    return (
      <KpiAccordion
        forceValue={forceValue}
        kpis={kpis}
        formatKpiValue={formatKpiValue}
        customTreeHeader={customTreeHeader}
        showWeight={showWeight}
        onCommentClick={onCommentClick}
      />
    );
  };

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      data-is-highlighted={!!isHighlighted}
    >
      {hasCustomHeader ? <div className={styles.bucket}>{customHeader(bucket)}</div> : <div className={styles.bucket}>
        <div className={styles.bucket_name}>
          {bucket.name}
        </div>
        <div className={styles.bucket_metrics}>
          <div
            className={styles.bucket_value}
            data-delta={bucket.delta || '0'}
            data-configuration={bucket.configuration}
          >
            <ArrowUp />
            {bucket.value || 0}
          </div>
          <div className={styles.bucket_weight}>
            {showWeight
              ? `${bucket.weightage || 0}%`
              : <>&nbsp;</>}
          </div>
        </div>
      </div>}
      <div className={styles.field_heading}>
        <div>KPI</div>
        <div>Value</div>
      </div>
      <div className={styles.search}>
        <Search
          onSearchEnter={onSearchEnter}
          autoSearch
        />
      </div>
      {renderContent()}
    </div>
  );
};

const Loader = () => {
  return (
    <>
      {Array.from(Array(5).keys()).map((value, index) => (
        <div className={styles.bucket} key={index}>
          <div className={styles.bucket_name}>
            <Pulse width="10rem" height="0.875rem" className={styles.pulse} />
            <Pulse width="5rem" height="0.5rem" className={styles.pulse} />
          </div>
          <div className={styles.bucket_metrics}>
            <div className={styles.bucket_value}>
              <Pulse width="1.5rem" height="0.5rem" />
            </div>
            <div className={styles.bucket_weight}>
              <Pulse width="1.5rem" height="0.5rem" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
