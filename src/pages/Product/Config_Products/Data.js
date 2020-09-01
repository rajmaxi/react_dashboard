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
const options = [
  { key: 'Disable', text: 'Disable' },
  { key: 'Enable', text: 'Enable' },
];
const Subtractoptions = [
  { key: 'Yes', text: 'Yes' },
  { key: 'No', text: 'No' },
];
const Taxoptions = [
  { key: 'None', text: '--None--' },
  { key: 'TaxableGoods', text: 'Taxable Goods' },
  { key: 'DownloadableProducts', text: 'Downloadable Products' },
];
const StockStatus = [
  { key: 'Available @ Store', text: 'Available @ Store' },
  { key: 'CallForPrice', text: 'Call For Price' },
  { key: 'InStock', text: 'In Stock' },
  { key: 'OutofStock', text: 'Out of Stock' },
  { key: 'PermanentlyDiscontinued', text: 'Permanently Discontinued' },
  { key: 'PreBook', text: 'Pre Book' },
  { key: 'PreRegister', text: 'Pre Register' },
  { key: 'StockInDemand', text: 'Stock In Demand' },
  { key: 'Upcoming', text: 'Upcoming' }
];
 const DataProduct = () => (
    <div className='pro_wrapper'>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ImageWidth'>Image Width</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Image Width' placeholder="Image Width"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ImageHeight'>Image Height</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ImageHeight' placeholder="Image Height"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Model'>Model</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Model' placeholder="Model"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ItemCode'>Item Code</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ItemCode' placeholder="Item Code"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Pinelabs(EMI)</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['Disable']}
            options={options}
            styles={dropdownStyles}
          />
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Offers(Cashback)</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['Disable']}
            options={options}
            styles={dropdownStyles}
          />
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Offer Text</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['Disable']}
            options={options}
            styles={dropdownStyles}
          />
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='SKU'>SKU</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='SKU' placeholder="SKU"/>
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
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Tax Class</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['--None--']}
            options={Taxoptions}
            styles={dropdownStyles}
          />
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Quantity'>Quantity</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Quantity' placeholder="Quantity"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='ShippingCost'>Shipping Cost</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='ShippingCost' placeholder="Shipping Cost"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='MinimumQuantity'>Minimum Quantity</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='MinimumQuantity' placeholder="Minimum Quantity"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Subtract Stock</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['Yes']}
            options={Subtractoptions}
            styles={dropdownStyles}
          />
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Out Of Stock Status</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['Available@Store']}
            options={StockStatus}
            styles={dropdownStyles}
          />
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor=''>Availability Stock Status:
              Status shown when a product is available</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
                <Dropdown
            placeholder="Select an option"
            defaultSelectedKeys={['InStock']}
            options={StockStatus}
            styles={dropdownStyles}
          />
            </div>
          </div>


          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='SEOKeyword'>SEO Keyword</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='SEOKeyword' placeholder="SEO Keyword"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='OfferText'>Offer Text</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='OfferText' multiline rows={7} placeholder="Offer Text"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Dimensions'>Dimensions (L x W x H)</Label>
            </div>
            <div className="ms-Grid-col ms-sm3 ms-xl3">
              <TextField id='Length' placeholder="Length"/>
            </div>
            <div className="ms-Grid-col ms-sm3 ms-xl3">
              <TextField id='Width' placeholder="Width"/>
            </div>
            <div className="ms-Grid-col ms-sm3 ms-xl3">
              <TextField id='Height' placeholder="Height"/>
            </div>
          </div>
          <div className="ms-Grid-row" style={FormGroup}>
            <div className="ms-Grid-col ms-sm2 ms-xl2">
              <Label htmlFor='Weight'>Weight</Label>
            </div>
            <div className="ms-Grid-col ms-sm9 ms-xl9">
              <TextField id='Weight' placeholder="Weight"/>
            </div>
          </div>
        </div>
          

);
export default DataProduct