import React, {useState, useEffect} from 'react'
import Breadcrumbs from '../../Breadcrumbs';
import Categoriestable from './Categoriestable';
import { IconButton } from 'office-ui-fabric-react';
import { initializeIcons } from "office-ui-fabric-react"
import {useParams} from 'react-router-dom';

function Catalogbody(props) {
    
    const { name } = useParams()

    useEffect (()=>{
        console.log('testsette',name);
    })
    initializeIcons();
    const categoryIcon = () => {
        return(
            <div className="bread-right">
                <IconButton iconProps={{ iconName: 'CirclePlus' }} className="prim" />
                <IconButton iconProps={{ iconName: 'Refresh' }} className="defa" />
                <IconButton iconProps={{ iconName: 'Delete' }} className="dang" />
            </div>
        )
    }
    return (
        <div>
             
             <Breadcrumbs iconButton={1} categoryIcon = {categoryIcon()}/>


             <div className="setadd">
                <div className="sethead">
                    <h4>Categories List</h4>
                </div>


                 <div className="catalogtable">
                       <Categoriestable/>
                 </div>


             </div>   
           
        </div>
    )
}

export default Catalogbody
