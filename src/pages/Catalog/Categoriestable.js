import React from 'react'
import { DetailsList } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';


const operations = [
    {
      from: 'Accessories',
      to: '3',
      Action: '$1 510',
      
    },
    {
      from: 'Accessories  >  Apple Accessories ',
      to: '4',
      Action: '$1 010',
     
    },
    {
        from: 'Accessories  >  Apple Accessories  >  Apple Airpods ',
        to: '23',
        Action: '$1 010',
      
    },
    {
        from: 'Accessories  >  Apple Accessories  >  Apple Connector',
        to: '0',
        Action: '$1 510',
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  Apple Earpods ',
        to: '4',
        Action: '$1 010',
       
      },
      {
          from: 'Accessories  >  Apple Accessories  >  Apple HomePod ',
          to: '23',
          Action: '$1 010',
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  Apple Watch',
        to: '3',
        Action: '$1 510',
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  Apple Watch Accessories',
        to: '4',
        Action: '$1 010',
       
      },
      {
          from: 'Accessories  >  Apple Accessories  >  Apple Watch Accessories  >  Cables',
          to: '23',
          Action: '$1 010',
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  iPad Accessories',
        to: '3',
        Action: '$1 510',
        
      },
      {
        from: 'Accessories  >  Apple Accessories  >  iPad Accessories  >  Apple Pencil',
        to: '4',
        Action: '$1 010',
       
      },
      {
          from: 'Accessories  >  Apple Accessories  >  iPad Accessories  >  iPad Keyboards',
          to: '23',
          Action: '$1 010',
        
      }
   
  ]
  
  const columns = [
    { key: 'column1', name: 'Categoies Name', fieldName: 'from'},
    { key: 'column2', name: 'Sort Order', fieldName: 'to' },
    { key: 'column3', name: 'Action', fieldName: ''},
  ]




function Categoriestable() {
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

export default Categoriestable
