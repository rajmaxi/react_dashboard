import React from 'react'
import Breadcrumbs from '../../Breadcrumbs';
import Catalog from './Categoriestable';

function Catalogbody() {
    return (
        <div>
             
             <Breadcrumbs/>


             <div className="setadd">
                <div className="sethead">
                    <h4>Categories List</h4>
                </div>


                 <div className="catalogtable">
                       <Catalog/>
                 </div>


             </div>   
           
        </div>
    )
}

export default Catalogbody
