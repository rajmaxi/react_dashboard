import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import DataProduct from './Config_Products/Data'
import GeneralDesc from './Config_Products/General';
import ProductLinks from './Config_Products/Links';

const ProWrap = {
  margin:'40px auto'
};
const FormGroup = {
  margin:'15px auto'
};
const dropdownStyles= {
  dropdown: { width: 180 },
};

 const EditProduct = () => (
  <div className="ms-Grid" dir="ltr" >
  <div className="ms-Grid-row">
    <div className="ms-Grid-col ms-sm12 ms-xl12">
      <div className='editproduct' style={{marginBottom:'50px'}}>
        <Pivot aria-label=" Link Size Pivot Example" >

          <PivotItem headerText="General" style={ProWrap}>
            <GeneralDesc />
          </PivotItem>
          <PivotItem headerText="Data">
            <DataProduct />
          </PivotItem>
          <PivotItem headerText="Links">
            <ProductLinks />
          </PivotItem>

          <PivotItem headerText="Attribute">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Option">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Recurring">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Discount">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Special">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Image">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Video">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Reward Points">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Design">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Product Label">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Storage">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Product Filter">
            <Label>Pivot #3</Label>
          </PivotItem>
          
        </Pivot>
          </div>
      </div>
    </div>
  </div>

);
export default EditProduct