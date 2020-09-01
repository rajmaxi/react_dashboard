import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

const ProWrap = {
  margin:'40px auto'
};
const FormGroup = {
  margin:'15px auto'
};
const dropdownStyles= {
  dropdown: { width: 180 },
};

 const ProductLinks = () => (
    <div className='ProductLinks pro_wrapper' >
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Manufacturer'>Manufacturer</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Manufacturer' placeholder="Manufacturer"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Categories'>Categories</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Categories' placeholder="Categories"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Filters'>Filters</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Filters' placeholder="Filters"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='PaymentMethods'>Payment Methods</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <div className='payMethods'>
                <Checkbox label="COD" />
                <Checkbox label="razorpay" />
                <Checkbox label="pinepg" />
                </div>
            </div>
          </div>
          
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Stores'>Stores</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Checkbox label="Default" defaultChecked/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='UPC'>UPC</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='UPC' placeholder="UPC"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='EAN'>EAN</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='EAN' placeholder="EAN"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='JAN'>JAN</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='JAN' placeholder="JAN"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ISBN'>ISBN</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ISBN' placeholder="ISBN"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='MPN'>MPN</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='MPN' placeholder="MPN"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Location'>Location</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Location' placeholder="Location"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='OsamaPrice'>Osama Price</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='OsamaPrice' placeholder="Osama Price"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Price'>Price</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Price' placeholder="Price"/>
            </div>
          </div>
          
          
        </div>
          

);
export default ProductLinks