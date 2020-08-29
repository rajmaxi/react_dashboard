import React, { useEffect } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { useLocation } from 'react-router-dom';
// import DataProduct from './Config_Products/Data'
// import GeneralDesc from './Config_Products/General';
// import ProductLinks from './Config_Products/Links';

const ProWrap = {
  margin: '40px auto'
};
const FormGroup = {
  margin: '15px auto'
};
const dropdownStyles = {
  dropdown: { width: 180 },
};

const EditProduct = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(props,'pros edoi',location);
  }, [])
  return (
    <div>
      hi
    </div>
  )
}
export default EditProduct