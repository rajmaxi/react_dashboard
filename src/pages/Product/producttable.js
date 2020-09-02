import React, { useState, useEffect } from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';
import { Link, Route } from 'react-router-dom';
import './style.css';


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

const productHead = [
    { 'proID': 1, 'isChecked': false, 'checkbox': <Checkbox label="" defaultChecked />, 'name': 'Image', 'pname': 'Product Name ', 'modelname': 'Model', 'pricename': 'Price', 'quantityname': 'Quantity', 'stockname': 'Stockstatus', 'quantitymodifyname': 'Quantity Modify time', 'statusname': 'Status', 'actionname': 'Action', 'feedname': 'Enablefeed' }
]

const product = [
    {
        proID: 1,
        check: <Checkbox label="" />,
        Image: "https://s1.poorvikamobile.com/image/data/AAAAA/vivo/Vivo X50 Pro/Alpha Grey/New/vivo-x50-pro-alpha-grey-128gb-8gb-ram-back_ios.jpeg",
        PName: 'pstest(64GB-black)',
        Model: 'pstest(64GB-black)',
        Price: 20000.0000,
        Quantity: 1,
        Stockstatus: 'In Stock',
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
        Stockstatus: 'In Stock',
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
        Stockstatus: 'In Stock',
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
        Stockstatus: 'In Stock',
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
        Stockstatus: 'In Stock',
        Status: 'Enabled',
        Action: <FontIcon iconName="Edit" className={edit_icon} />,
        EnableFeed: <Checkbox label="" defaultChecked />,
        isChecked: false
    }
]

const ProductsTable = () => {
    const [allCheck, setAllCheck] = useState(false);
    const [products, setproduct] = useState(product)
    useEffect(() => {

    }, []);

    const _checkClick = (e, parms, index) => {
        var newArray = [...products];
        // var elementsIndex = newArray.findIndex(function (element) {
        //     return element.proID == parms.proID
        // });
        var elementsIndex = products.findIndex(element => element.proID === parms.proID);
        newArray[elementsIndex] = { ...newArray[elementsIndex], isChecked: !newArray[elementsIndex].isChecked }
        setproduct(newArray);
    }

    const _checkboxAllclick = (e, item, index) => {
        if (allCheck) {
            //console.log('if');
            var checkTrue = products.map((element, i) => {
                element.isChecked = false
                return element
            });  
            console.log('rertr',checkTrue)

            setproduct(checkTrue);
            setAllCheck(false);
        } else {
            //console.log('else');
            let checkTrue = products.map((element, i) => {
                element.isChecked = true
                return element
            });
            setproduct(checkTrue);
            setAllCheck(true);
        }
    }

    const finalChange = () => {
        console.log('dfsdfsds', products)
    }
    // console.log('products :::m ', products)
    return (
        <div>
            <div data-is-scrollable={true}>
                {productHead.map((element, index) => (
                    <div class="ms-Grid" dir="ltr">
                        <Card className="cardStyles">
                            <div class="ms-Grid-row">
                                <div class="ms-Grid-col ms-lg1"><Checkbox label='' defaultChecked={element.isChecked} onChange={(e) => _checkboxAllclick(e, element, index)} /></div>
                                <div class="ms-Grid-col ms-lg1">{element.name}</div>
                                <div class="ms-Grid-col ms-lg2">{element.pname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.modelname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.pricename}</div>
                                <div class="ms-Grid-col ms-lg1">{element.quantityname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.stockname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.quantitymodifyname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.statusname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.actionname}</div>
                                <div class="ms-Grid-col ms-lg1">{element.feedname}</div>
                            </div>
                        </Card>
                    </div>
                ))}
                {products.map((element, index) => (
                    <div class="ms-Grid" dir="ltr">
                        <Card className="cardStyles">
                            <div class="ms-Grid-row">
                                <div class="ms-Grid-col ms-lg1">
                                    <Checkbox label='' checked={element.isChecked} onChange={(e) => _checkClick(e, element, index)} />
                                </div>
                                <div class="ms-Grid-col ms-lg1">
                                    <img src={element.Image} alt="demo" className='pro_img' />
                                </div>
                                <div class="ms-Grid-col ms-lg2">{element.PName}</div>
                                <div class="ms-Grid-col ms-lg1">{element.Model}</div>
                                <div class="ms-Grid-col ms-lg1">{element.Price}</div>
                                <div class="ms-Grid-col ms-lg1">{element.Quantity}</div>
                                <div class="ms-Grid-col ms-lg1">{element.Stockstatus}</div>
                                <div class="ms-Grid-col ms-lg1">{element.modifydate}</div>
                                <div class="ms-Grid-col ms-lg1">{element.Status}</div>
                                <div class="ms-Grid-col ms-lg1">
                                    <div>
                                        <Link to={{
                                            pathname: '/editproduct',
                                            state: { id: element.proID }
                                        }}><FontIcon iconName="Edit" className={edit_icon} /></Link>
                                    </div>
                                </div>
                                <div class="ms-Grid-col ms-lg1">{element.EnableFeed}</div>
                            </div>
                        </Card>
                    </div>

                ))}
            </div>
            <div onClick={finalChange}>
                final
            </div>
        </div>
    );
};

export default ProductsTable;