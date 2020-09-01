import React from 'react'
import Breadcrumbs from '../../Breadcrumbs';
import Filters from './Filtertable';
import { IconButton } from 'office-ui-fabric-react';
import { initializeIcons } from "office-ui-fabric-react"

function Filtersbody() {
    initializeIcons();
    const filterIcon = () => {
        return(
            <div className="bread-right">
                <IconButton iconProps={{ iconName: 'CirclePlus' }} className="prim" />
                <IconButton iconProps={{ iconName: 'Delete' }} className="dang" />
            </div>
        )
    }
    return (
        <div>
           
           <Breadcrumbs iconButton={2} filterIcon={filterIcon()}/>

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

