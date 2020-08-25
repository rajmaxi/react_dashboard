import React from 'react'
import Breadcrumbs from '../../Breadcrumbs';
import Filters from './Filtertable';
function Filtersbody() {
    return (
        <div>
           
           <Breadcrumbs/>

           <div className="setadd">
                <div className="sethead">
                    <h4>Filters List</h4>
                </div>


                <div className="filtertable">
                       <Filters/>
                 </div>



            </div>    
         
        </div>
    )
}

export default Filtersbody

