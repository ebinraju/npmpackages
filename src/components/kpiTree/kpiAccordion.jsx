import React, { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import ChevronRight from '../../icons/chevronRight.jsx';
import CommentIcon from '../../icons/comment.jsx';
import styles from './index.module.scss';

const KpiAccordion = (props) => {
  const { kpis = [], level = 0, formatKpiValue, showWeight, forceValue = [], onCommentClick } = props;
  const [value, setValue] = useState(forceValue);

  useEffect(() => {
    setValue(forceValue);
  }, [JSON.stringify(forceValue)]);

  return (
    <Accordion.Root
      collapsible="true"
      value={value}
      onValueChange={setValue}
      type="multiple"
    >
      {kpis.map((kpi) => (
        kpi.children?.length
          ? (
            <Accordion.Item value={kpi.code} key={kpi.code} className={styles.accordion_item} data-level={level}>
              <Accordion.Header>
                <Accordion.Trigger className={styles.accordion_trigger}>
                  <div className={styles.kpi_wrapper} data-level={level}>
                    <div className={styles.kpi_header}>
                      <ChevronRight fill="#aaabad" className={styles.icon} />
                      {kpi.title}
                    </div>
                    {kpi.hideMetrics ? null : <div className={styles.kpi_metrics}>
                      <div className={styles.kpi_value}>
                        {formatKpiValue
                          ? formatKpiValue(kpi.score, kpi.scoreUnit)
                          : kpi.score || 0
                        }
                      </div>
                      <div className={styles.kpi_weight}>
                        {showWeight
                          ? `${kpi.weightage || 0}%`
                          : <>&nbsp;</>}
                      </div>
                    </div>}
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles.accordion_content}>
                <KpiAccordion
                  forceValue={forceValue}
                  kpis={kpi.children}
                  level={level + 1}
                  formatKpiValue={formatKpiValue}
                  showWeight={showWeight}
                  onCommentClick={onCommentClick}
                />
              </Accordion.Content>
            </Accordion.Item>
          ) : (
            <div
              key={kpi.code}
              className={styles.kpi_wrapper}
              data-level={level}
              data-is-impacting={kpi.isImpacting}
            >
              <div className={styles.kpi_header}>
                {kpi.title}
              </div>
              {kpi.hideMetrics ? null : <div className={styles.kpi_metrics}>
                <div className={styles.kpi_value}>
                  {formatKpiValue
                    ? formatKpiValue(kpi.score, kpi.scoreUnit)
                    : kpi.score || 0
                  }
                </div>
                <div className={styles.kpi_weight}>
                  {showWeight
                    ? `${kpi.weightage || 0}%`
                    : <>&nbsp;</>}
                </div>
              </div>}
              {kpi.isImpacting
                ? (
                  <div className={styles.comment_wrapper}>
                    <div
                      className={styles.comment_btn}
                      onClick={() => onCommentClick(kpi)}
                    >
                      <CommentIcon className={styles.comment_icon} />
                      Add
                    </div>
                  </div>
                ) : null}
            </div>
          )
      ))}
    </Accordion.Root>
  );
};

const KpiAccordionWrapper = (props) => {
  const { ...rest } = props;

  return (
    <div className={styles.accordion_wrapper}>
      <KpiAccordion {...rest} />
    </div>
  )
};

export default KpiAccordionWrapper;
