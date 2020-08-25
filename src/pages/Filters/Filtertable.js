import React from 'react'
import { DetailsList } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';



const operations = [
    {
      from: 'CAPACITY',
      to: '3',
      Action: '$1 510',
      
    },
    {
      from: 'CLASS ',
      to: '4',
      Action: '$1 010',
     
    },
    {
        from: 'CPU / Processor',
        to: '23',
        Action: '$1 010',
      
    },
    {
        from: 'DESIGN',
        to: '0',
        Action: '$1 510',
        
      },
      {
        from: 'External Storage',
        to: '4',
        Action: '$1 010',
       
      },
      {
          from: 'Features ',
          to: '23',
          Action: '$1 010',
        
      },
      {
        from: 'Form Factor',
        to: '3',
        Action: '$1 510',
        
      },
      {
        from: 'FUNCTIONALITY',
        to: '4',
        Action: '$1 010',
       
      },
      {
          from: 'Internal Storage',
          to: '23',
          Action: '$1 010',
        
      },
      {
        from: 'MAH',
        to: '3',
        Action: '$1 510',
        
      },
      {
        from: 'MIC Option',
        to: '4',
        Action: '$1 010',
       
      },
      {
          from: 'Mobile -Filter',
          to: '23',
          Action: '$1 010',
        
      }
   
  ]
  
  const columns = [
    { key: 'column1', name: 'Categoies Name', fieldName: 'from'},
    { key: 'column2', name: 'Sort Order', fieldName: 'to' },
    { key: 'column3', name: 'Action', fieldName: ''},
  ]





function Filtertable() {
    return (
        <div>
            <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
             />
        </div>
    )
}

export default Filtertable
