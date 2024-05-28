import { DataTable, Table, Tbody, Td, Th, Thead, Tr } from '../../components/table/index.jsx';
import styles from './index.module.scss';

export default {
  component: DataTable,
  title: 'Table',
  argTypes: {
  }
};

export const Default = {
  args: {
    defaultSort: { sortOrder: 'asc', sortField: 'vessel' },
    columns: [
      { title: 'Vessels', dataField: 'vessel', sortable: true, align: 'left' },
      { title: 'Index', dataField: 'fleetIndex', sortable: true },
      { title: 'Cost', dataField: 'cost', sortable: true },
      { title: 'Digitalization', dataField: 'digitalization', sortable: true },
      { title: 'Environmental', dataField: 'environmental', sortable: true },
      { title: 'Operational', dataField: 'operational', sortable: true },
      { title: 'Reliability', dataField: 'reliability', sortable: true },
      { title: 'Safety and Compliance', dataField: 'compliance' },
    ],
    dataSource: [
      { vesselCode: 1, vessel: 'RTM Cabot', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 2, vessel: 'Nickie B', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 3, vessel: 'APL Houston', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 4, vessel: 'Andrea Doria', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 5, vessel: 'Bismark', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 6, vessel: 'APL Florida', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 7, vessel: 'Blue Butterfly', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 8, vessel: 'Gas Stella', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 9, vessel: 'APL California', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 }
    ],
    keyField: 'vesselCode',
    onRowClick: console.log,
    onSort: console.log
  }
};

export const CusstomTitle = {
  args: {
    defaultSort: { sortOrder: 'asc', sortField: 'vessel' },
    columns: [      
      { title: 'Vessels', dataField: 'vessel', sortable: true, align: 'left' },
      { title: 'Index', dataField: 'fleetIndex', sortable: true },
      { title: 'Cost', dataField: 'cost', sortable: true },
      { title: 'Digitalization', dataField: 'digitalization', sortable: true },
      { title: 'Environmental', dataField: 'environmental', sortable: true },
      { title: 'Operational', dataField: 'operational', sortable: true },
      { title: 'Reliability', dataField: 'reliability', sortable: true },
      { title: 'Safety and Compliance', dataField: 'compliance' },
      { title: ()=> {
        return <div onClick={(e)=> {
          e.stopPropagation();
          console.log('Maximize');
        }}>Maximize</div>
      }}
    ],
    dataSource: [
      { vesselCode: 1, vessel: 'RTM Cabot', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 2, vessel: 'Nickie B', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 3, vessel: 'APL Houston', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 4, vessel: 'Andrea Doria', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 5, vessel: 'Bismark', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 6, vessel: 'APL Florida', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 7, vessel: 'Blue Butterfly', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 8, vessel: 'Gas Stella', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 9, vessel: 'APL California', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 }
    ],
    keyField: 'vesselCode',
    onRowClick: console.log,
    onSort: console.log
  }
};

export const ActiveColumn = {
  args: {
    activeDataField: 'operational',
    activeDataFieldException: ['cost'],
    type: 'primary',
    columns: [
      { title: 'Vessels', dataField: 'vessel', sortable: true, align: 'left' },
      { title: 'Index', dataField: 'fleetIndex', sortable: true },
      { title: 'Cost', dataField: 'cost', sortable: true },
      { title: 'Digitalization', dataField: 'digitalization', sortable: true },
      { title: 'Environmental', dataField: 'environmental', sortable: true },
      { title: 'Operational', dataField: 'operational', sortable: true },
      { title: 'Reliability', dataField: 'reliability', sortable: true },
      { title: 'Safety and Compliance', dataField: 'compliance' }
    ],
    dataSource: [
      { vesselCode: 1, vessel: 'RTM Cabot', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 2, vessel: 'Nickie B', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 3, vessel: 'APL Houston', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 4, vessel: 'Andrea Doria', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 5, vessel: 'Bismark', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 6, vessel: 'APL Florida', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 7, vessel: 'Blue Butterfly', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 8, vessel: 'Gas Stella', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 9, vessel: 'APL California', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 }
    ],
    keyField: 'vesselCode'
  }
};

export const StickyColumns = {
  args: {
    stickyColumns: 2,
    columns: [
      { title: 'Vessels', dataField: 'vessel', sortable: true, align: 'left' },
      { title: 'Index', dataField: 'fleetIndex', sortable: true },
      { title: 'Cost', dataField: 'cost', sortable: true },
      { title: 'Digitalization', dataField: 'digitalization', sortable: true },
      { title: 'Environmental', dataField: 'environmental', sortable: true },
      { title: 'Operational', dataField: 'operational', sortable: true },
      { title: 'Reliability', dataField: 'reliability', sortable: true },
      { title: 'Safety and Compliance', dataField: 'compliance' }
    ],
    dataSource: [
      { vesselCode: 1, vessel: 'RTM Cabot', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 2, vessel: 'Nickie B', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 3, vessel: 'APL Houston', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 4, vessel: 'Andrea Doria', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 5, vessel: 'Bismark', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 6, vessel: 'APL Florida', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 7, vessel: 'Blue Butterfly', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 8, vessel: 'Gas Stella', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 9, vessel: 'APL California', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 }
    ],
    keyField: 'vesselCode'
  }
};

export const Primary = {
  args: {
    defaultSort: { sortOrder: 'asc', sortField: 'vessel' },
    type: 'primary',
    columns: [
      { title: 'Vessels', dataField: 'vessel', sortable: true, align: 'left' },
      { title: 'Index', dataField: 'fleetIndex', sortable: true },
      { title: 'Cost', dataField: 'cost', sortable: true },
      { title: 'Digitalization', dataField: 'digitalization', sortable: true },
      { title: 'Environmental', dataField: 'environmental', sortable: true },
      { title: 'Operational', dataField: 'operational', sortable: true },
      { title: 'Reliability', dataField: 'reliability', sortable: true }
    ],
    dataSource: [
      { vesselCode: 1, vessel: 'RTM Cabot', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 2, vessel: 'Nickie B', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 3, vessel: 'APL Houston', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 4, vessel: 'Andrea Doria', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 5, vessel: 'Bismark', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 6, vessel: 'APL Florida', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 7, vessel: 'Blue Butterfly', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 8, vessel: 'Gas Stella', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 },
      { vesselCode: 9, vessel: 'APL California', fleetIndex: 45, cost: 46, digitalization: 32, environmental: 56, operational: 89, reliability: 33, compliance: 23 }
    ],
    keyField: 'vesselCode',
    onRowClick: console.log,
    onSort: console.log
  }
};

export const ComplexLayouts = {
  render: () => (
    <Table className={styles.table_custom}>
      <Thead>
        <Tr>
          <Th align="left" style={{ position: 'sticky', left: 0, borderRight: '1px solid #d2d3d4', zIndex: 2 }}>
            <div style={{ width: 100 }}>Vessels</div>
          </Th>
          <Th><div style={{ width: 80 }}>&nbsp;</div></Th>
          <Th>Sailing Time</Th>
          <Th>Fuel Savings</Th>
          <Th>ME SFOC</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td align="left" rowSpan={2} style={{ position: 'sticky', left: 0, borderRight: '1px solid #d2d3d4', zIndex: 2 }}>RTM Cabot</Td>
          <Td>
            Today
          </Td>
          <Td>84</Td>
          <Td>9</Td>
          <Td>177</Td>
        </Tr>
        <Tr>
          <Td>18 Feb 2024</Td>
          <Td>75</Td>
          <Td>5</Td>
          <Td>180</Td>
        </Tr>
        <Tr>
          <Td align="left" rowSpan={2} style={{ position: 'sticky', left: 0, borderRight: '1px solid #d2d3d4', zIndex: 2 }}>APL Florida</Td>
          <Td>
            Today
          </Td>
          <Td>84</Td>
          <Td>9</Td>
          <Td>177</Td>
        </Tr>
        <Tr>
          <Td>18 Feb 2024</Td>
          <Td>75</Td>
          <Td>5</Td>
          <Td>180</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
