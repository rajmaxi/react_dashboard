import React, {useState} from 'react'
import './style.css'
import { Card } from '@uifabric/react-cards';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { PrimaryButton } from 'office-ui-fabric-react';
import ProductsTable from './producttable';
import Breadcrumbs from '../../Breadcrumbs';
import { IconButton } from 'office-ui-fabric-react';
import { initializeIcons } from "office-ui-fabric-react"

function ProdutBody() {
    initializeIcons();
    const productIcon = () => {
        return(
            <div className="bread-right">
                <IconButton iconProps={{ iconName: 'CirclePlus' }} className="prim" />
                <IconButton iconProps={{ iconName: 'Copy' }} className="defa" />
                <IconButton iconProps={{ iconName: 'Delete' }} className="dang" />
                <IconButton iconProps={{ iconName: 'Save' }} className="prim" />
            </div>
        )
    }
    return (
        <div>
            <Breadcrumbs iconButton={0} productIcon = {productIcon()}/>
            <div className="setadd">
                <div className="sethead">
                    <h4>Set additional options for products</h4>
                </div>
                <div className="productoption">
                    <div className="product-select">


                        <Card className="cardStyles">

                            <div className="ms-Grid" dir="ltr">
                                <div className="ms-Grid-row">
                                    <div className="ms-Grid-col ms-md4">
                                        <TextField label="Product Name" />
                                        <TextField label="Model" />
                                    </div>
                                    <div className="ms-Grid-col ms-md4">
                                        <TextField label="Price" />
                                        <TextField label="Quantity" />
                                    </div>
                                    <div className="ms-Grid-col ms-md4">
                                        <TextField label="Status" />
                                        <TextField label="itemcode" />

                                        <PrimaryButton className="btprim" text="Filter" />

                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>


                    <div className="datalist">
                        <ProductsTable />
                    </div>



                </div>
            </div>

        </div>
    )
}

export default ProdutBody
