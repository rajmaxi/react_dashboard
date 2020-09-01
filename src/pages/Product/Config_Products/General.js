import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const ProWrap = {
  margin:'40px auto'
};
const FormGroup = {
  margin:'15px auto'
};
const dropdownStyles= {
  dropdown: { width: 180 },
};

 const GeneralDesc = () => (

          <div className='pro_wrapper'>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='test'>Product Name</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ProductName' placeholder="Product Name"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='TrendingProduct'>Trending Product</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='TrendingProduct' placeholder="Trending Product"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='VideoThumbnail'>Video thumbnail link</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='VideoThumbnail' placeholder="Video thumbnail link"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='TitleCustomTab'>Title for custom tab</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='TitleCustomTab' placeholder="Title for custom tab"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='CustomTab'> Custom tab</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='CustomTab'  multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ShortDescription'>Short Description</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ShortDescription'  multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Description'> Description</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Description'  multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='MobAppDescription'> Mobile App Description</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='MobAppDescription' placeholder="Mobile App Description" multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='TagTitle'> Meta Tag Title</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='TagTitle'  placeholder="Meta Tag Title"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='TagDescription'> Meta Tag Description</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='TagDescription'  placeholder="Meta Tag Description" multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='TagKeywords'> Meta Tag Keywords</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='TagKeywords'  placeholder="Meta Tag Keywords" multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='OtherDescription'> Other Description</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='OtherDescription'  multiline rows={7}/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ProductTags'> Product Tags</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ProductTags'  placeholder="Product Tags"/>
            </div>
          </div>
        </div>
         
       

);
export default GeneralDesc