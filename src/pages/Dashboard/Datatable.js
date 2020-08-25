import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';


const classNames = mergeStyleSets({
  table: {
    margin: 'auto',
    
  }
});

const operations = [
  {
    from: '3D Tempered Glass Screen  ',
    to: 'C5 5000 mAh Power Bank',
    amount: '$1 510',
    date: 'In Stock',
    Quantity:"45",
    Status:"Enabled",
  },
  {
    from: 'Fingers C5 5000 mAh Power Bank (Blue)  ',
    to: 'Inspire HR Band',
    amount: '$1 010',
    date: 'In Stock',
    Quantity:"45",
    Status:"Disable",
  },
  {
    from: 'Amazon Echo Show 10 (Black) ',
    to: 'Versa 2 Smart Watch',
    amount: '$1 350',
    date: 'Out of Stock',
    Quantity:"45",
    Status:"Enabled",
  },
  {
    from: 'Fitbit Versa 2 Smartwatch (Black/Carbon) ',
    to: 'Trifold Pouch For Samsung T295',
    amount: '$1 900',
    date: 'Out of Stock',
    Quantity:"45",
    Status:"Enabled",
  },
  {
    from: 'Garmin Forerunner 35 Smartwatch (Black) ',
    to: 'Forerunner 35 Smartwatch',
    amount: '$6 350',
    date: 'Out of Stock',
    Quantity:"45",
    Status:"Disable",
  }
]

const columns = [
  { key: 'column1', name: 'Image', fieldName: 'img', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column2', name: 'Product Name', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column3', name: 'Model', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column4', name: 'Price', fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column5', name: 'Quantity', fieldName: 'Quantity', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column6', name: 'Stock Status', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column7', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column8', name: 'Action', fieldName: 'Action', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column9', name: 'Enable Feed', fieldName: 'EnableFeed', minWidth: 100, maxWidth: 300, isResizable: true },
]

const OperationsTable = () => {
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-md12 ${classNames.table}`}>
        <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};

export default OperationsTable;