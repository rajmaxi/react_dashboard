import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import './style.css';

const classNames = mergeStyleSets({
    table: {
        verticalAlign: 'middle',
        border: "1px solid #ddd",
        borderRadius: '8px',
        padding: '10px 0px',
        margin: '25px auto'
    }
});
const edit_icon = mergeStyles({
    padding: '13px 10px',
    fontSize: '12px',
    lineHeight: 1.42857,
    borderRadius: '3px',
    color: '#FFF',
    backgroundColor: '#1E91CF',
    margin: 'auto',
    cursor: 'pointer'
});
const products = [
    {
        proID: 1,
        check: <Checkbox label="" onChange={_onChange} />,
        Image: "https://s1.poorvikamobile.com/image/data/AAAAA/vivo/Vivo X50 Pro/Alpha Grey/New/vivo-x50-pro-alpha-grey-128gb-8gb-ram-back_ios.jpeg",
        PName: 'pstest(64GB-black)',
        Model: 'pstest(64GB-black)',
        Price: 20000.0000,
        Quantity: 1,
        Status: 'Enabled',
        Action: <FontIcon iconName="Edit" className={edit_icon} />,
        EnableFeed: <Checkbox label="" defaultChecked />,
        isChecked: false
    },
    {
        proID: 2,
        check: <Checkbox label="" />,
        Image: "https://s1.poorvikamobile.com/image/data/AAAAA/Samsung/A31/New/Blue/samsung-galaxy-a31-blue-128gb-6gb-ram-back_ios.jpeg",
        PName: 'Apple Airpods Pro',
        Model: 'Apple Airpods Pro',
        Price: 25900.00,
        Quantity: 1,
        Status: 'Enabled',
        Action: <FontIcon iconName="Edit" className={edit_icon} />,
        EnableFeed: <Checkbox label="" defaultChecked />,
        isChecked: false
    },
    {
        proID: 3,
        check: <Checkbox label="" />,
        Image: "https://s1.poorvikamobile.com/image/data/AAAAA/oppo/A31/New/Black/oppo-a31-black-64gb-4gb-ram-front_ios.jpeg",
        PName: 'pstest(64GB-black)',
        Model: 'pstest(64GB-black)',
        Price: 20000.00,
        Quantity: 1,
        Status: 'Enabled',
        Action: <FontIcon iconName="Edit" className={edit_icon} />,
        EnableFeed: <Checkbox label="" defaultChecked />,
        isChecked: false
    },
    {
        proID: 4,
        check: <Checkbox label="" />,
        Image: "https://s1.poorvikamobile.com/image/data/AAAAA/Samsung/A31/New/Blue/samsung-galaxy-a31-blue-128gb-6gb-ram-back_ios.jpeg",
        PName: 'Apple HomePod ',
        Model: ' HomePod ',
        Price: 18900.00,
        Quantity: 1,
        Status: 'Enabled',
        Action: <FontIcon iconName="Edit" className={edit_icon} />,
        EnableFeed: <Checkbox label="" defaultChecked />,
        isChecked: false
    },
    {
        proID: 5,
        check: <Checkbox label="" />,
        Image: "https://s1.poorvikamobile.com/image/data/AAAAA/oppo/A31/New/Black/oppo-a31-black-64gb-4gb-ram-front_ios.jpeg",
        PName: 'Apple iPad Mini WiFi - 64GB ',
        Model: ' iPad Mini WiFi - 64GB ',
        Price: 34900.00,
        Quantity: 1,
        Status: 'Enabled',
        Action: <FontIcon iconName="Edit" className={edit_icon} />,
        EnableFeed: <Checkbox label="" defaultChecked />,
        isChecked: false
    }
]

const columns = [
    { key: 'column1', name: <Checkbox label="" className='myCheckbx' />, fieldName: 'check', minWidth: 80, maxWidth: 80, fontSize: 16, isResizable: true },
    { key: 'column2', name: 'Image', fieldName: 'Image', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column3', name: 'Product Name', fieldName: 'PName', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column4', name: 'Model', fieldName: 'Model', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column5', name: 'Price', fieldName: 'Price', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column6', name: 'Quantity', fieldName: 'Quantity', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column7', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column8', name: 'Action', fieldName: 'Action', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column9', name: 'EnableFeed', fieldName: 'EnableFeed', minWidth: 100, maxWidth: 300, isResizable: true },
]
const _checkClick = (e, prams, index) => {


    // console.log(prams);
    // e.preventdefault();
    var finalFind = products.find(element => element.proID === prams.proID);
    if (finalFind.isChecked) {
        finalFind['isChecked'] = false;
        console.log('if');
    } else {
        finalFind['isChecked'] = true;
        console.log('else');
    }
    // (!finalFind.isChecked) ? (finalFind.isChecked = fals) : (alert('hi'));
    console.log(finalFind);

}
const finalChange = () => {
    console.log(products);
}

const ProductsTable = () => {
    return (
        <div>
            <div data-is-scrollable={true}>
                {products.map((element, index) => (
                    <div class="ms-Grid" dir="ltr">
                        <div class="ms-Grid-row">
                            <div class="ms-Grid-col ms-lg1">
                                <Checkbox label='' defaultChecked={element.isChecked} onChange={(e) => _checkClick(e, element, index)} />
                            </div>
                            <div class="ms-Grid-col ms-lg1">
                                <img src={element.Image} alt="demo" className='pro_img' />
                            </div>
                            <div class="ms-Grid-col ms-lg2">{element.PName}</div>
                            <div class="ms-Grid-col ms-lg2">{element.Model}</div>
                            <div class="ms-Grid-col ms-lg1">{element.Price}</div>
                            <div class="ms-Grid-col ms-lg1">{element.Quantity}</div>
                            <div class="ms-Grid-col ms-lg1">{element.Status}</div>
                            <div class="ms-Grid-col ms-lg1">MODIFY</div>
                            <div class="ms-Grid-col ms-lg1">{element.Status}</div>
                            <div class="ms-Grid-col ms-lg1"><FontIcon iconName="Edit" className={edit_icon} /></div>
                        </div>
                    </div>

                ))}
                {/* <DetailsList 
          items={products}
          columns={columns}
          selectionMode={0}
        /> */}
            </div>
            <div onClick={finalChange}>
                final
            </div>
        </div>
    );
};
function _onChange(ev, isChecked) {
    console.log(`The option has been changed to ${isChecked}.`);
}
export default ProductsTable;