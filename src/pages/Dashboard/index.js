import React from 'react'
import './Dash.css';
import { Card } from '@uifabric/react-cards';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { PrimaryButton } from 'office-ui-fabric-react';
import Productlist from './Datatable';
import Breadcrumbs from '../../Breadcrumbs';

function Dashbody() {
    return (
        <div>
            <Breadcrumbs />
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
                        <Productlist />
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Dashbody
