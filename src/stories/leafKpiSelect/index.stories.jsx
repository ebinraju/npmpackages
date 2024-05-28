import { LeafKpiSelect } from '../../components/leafKpiSelect/index.jsx';
import styles from './index.module.scss';
import data from './data.json';

export default {
  component: LeafKpiSelect,
  title: 'LeafKpiSelect',
  argTypes: {
  }
};

export const Default = {
  args: {
    kpis: data,
    className: styles.wrapper,
    selectionLimit: 5,
    onClickAfterLimitHandler:console.log,
    onSelect: console.log,
    buckets: [{
      "value": 0.59,
      "code": 1,
      "description": null,
      "distribution": 0,
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Cost Index",
      "weightage": 1,
      "delta": 1,
      "configuration": "Green",
      "colorCode": 0,
      "impactingKPI": null
    }, {
      "value": 0.59,
      "code": 2,
      "description": null,
      "distribution": 0,
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Environmental Index",
      "weightage": 1,
      "delta": -1,
      "configuration": "Yellow",
      "colorCode": 0,
      "impactingKPI": null
    }],
    serviceFunction: (item) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data[item.code - 1]);
        }, [500]);
      })
    }
  }
};
