import React, { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Search } from '../search/index.jsx';
import { Empty } from '../empty/index.jsx';
import { Pulse } from '../pulse/index.jsx';
import ArrowIcon from '../../icons/arrowUp.jsx';
import CaretIcon from '../../icons/caretDown.jsx';
import styles from './index.module.scss';
import { useDidUpdateEffect } from '../../utils/hooks.js';

export const LeafKpiSelect = (props) => {
  const {
    className = '', buckets = [], onClickAfterLimitHandler, selectionLimit, defaultSelected,
    onSelect, ...rest
  } = props;
  const [selected, setSelected] = useState(defaultSelected || []);
  const [openBucket, setOpenBucket] = useState(buckets[0]?.code);

  const onKpiSelect = (kpi) => {
    const index = selected.findIndex((item) => item === kpi.code);
    if (index > -1) {
      setSelected((prev) => {
        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
      });
    }
    else if(selectionLimit === 1){
      return setSelected([kpi.code]);
    }
    else if (!selectionLimit || (selectionLimit && selected.length < selectionLimit)) {
      setSelected((prev) => {
        const copy = [...prev];
        copy.push(kpi.code);
        return copy;
      });
    }
    else if( (onClickAfterLimitHandler && selectionLimit && selected.length >= selectionLimit))
    {
      onClickAfterLimitHandler(kpi);
    }
  };

  useDidUpdateEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  return (
    <Accordion.Root
      className={`${className} ${styles.root}`}
      collapsible
      value={openBucket}
      onValueChange={setOpenBucket}
    >
      {buckets?.length
        ? buckets.map((bucket) => (
          <AccordionItem
            {...rest}
            bucket={bucket}
            key={bucket.code}
            onKpiSelect={onKpiSelect}
            selectedKpis={selected}
            openBucket={openBucket}
          />
        )) : null}
    </Accordion.Root>
  );
};

const AccordionItem = (props) => {
  const { bucket, serviceFunction, onKpiSelect, selectedKpis, openBucket } = props;
  const [leafNodes, setLeafNodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [visibleLeafNodes, setVisibleLeafNodes] = useState([]);

  useEffect(() => {
    setVisibleLeafNodes(() => {
      return leafNodes.filter((item) => (
        item.title.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }, [search]);

  useEffect(() => {
    /* 
    * call this api only once when the 
    * accordion opens for the first time 
    */
    if (loading && openBucket === bucket.code) {
      serviceFunction(bucket)
        .then((res) => {
          setLeafNodes(res || []);
          setVisibleLeafNodes(res || []);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [openBucket]);

  return (
    <Accordion.Item
      className={styles.item}
      value={bucket.code}
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={styles.trigger}
          data-configuration={bucket.configuration}
          data-delta={bucket.delta}
        >
          <div className={styles.title}>
            {bucket.name || ''}
          </div>
          <div className={styles.extra}>
            <div className={styles.metrics}>
              <div
                className={styles.value}
              >
                <ArrowIcon className={styles.arrow} />
                {bucket.value || 0}
              </div>
              <div className={styles.weight}>
                {`${bucket.weightage || 0}%`}
              </div>
            </div>
            <CaretIcon className={styles.caret} />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.content}>
        <div className={styles.content_heading}>
          <div>KPI</div>
          <div>Value</div>
        </div>
        <Search
          className={styles.search}
          autoSearch
          allowClear
          defaultValue={search}
          onSearchEnter={setSearch}
        />
        <div className={styles.kpi_container}>
          {loading
            ? (
              <Loader />
            )
            : !visibleLeafNodes?.length
              ? (
                <Empty title="No KPI's found." />
              )
              : visibleLeafNodes?.map((kpi) => (
                <div
                  className={`${styles.kpi} ${selectedKpis.includes(kpi.code) ? styles.active : ''}`} key={kpi.code}
                  onClick={() => onKpiSelect(kpi)}
                  data-is-impacting={kpi.isImpacting}
                >
                  <div className={styles.kpi_name}>
                    {kpi.title || ''}
                  </div>
                  <div className={styles.kpi_metrics}>
                    <div className={styles.kpi_value}>
                      {/* <ArrowIcon className={styles.arrow} /> */}
                      {kpi.score}
                    </div>
                    <div className={styles.kpi_weight}>
                      {`${kpi.weightage || 0}%`}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

const Loader = () => (
  Array.from(Array(5).keys()).map((value, index) => (
    <div
      className={styles.kpi}
      key={index}
    >
      <div className={styles.kpi_name}>
        <Pulse className={styles.pulse} height="0.5rem" width="90%" />
        <Pulse className={styles.pulse} height="0.5rem" width="60%" />
      </div>
      <div className={styles.kpi_metrics}>
        <div className={styles.kpi_value}>
          <Pulse className={styles.pulse} height="0.5rem" width="1.5rem" />
        </div>
        <div className={styles.kpi_weight}>
          <Pulse className={styles.pulse} height="0.5rem" width="1.5rem" />
        </div>
      </div>
    </div>
  ))
);
