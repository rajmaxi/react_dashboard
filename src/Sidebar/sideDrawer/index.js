import React, { useEffect, } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from "office-ui-fabric-react"
import { useDispatch, } from 'react-redux';
import logo from '../../assets/images/logo_sidebar.png';
import './style.css';
import 'office-ui-fabric-react/dist/css/fabric.css';


export default function App(props) {
    console.log('routing',props)
    initializeIcons();
    const dispatch = useDispatch();

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    useEffect(() => {
        console.log('sideDrawerpage')
    }, [])
    const leftMenu = () => {
        const navLinkGroups = [
            {
                links: [
                    {
                        name: <Link to="/">Dashboard</Link>,
                        Link: '/dashboard',
                        icon: 'ViewDashboard',
                    },
                    {
                        name: <Link to={`/categories/${props.name}`}>Categories</Link>,
                        Link: '/categories',
                        icon: 'ProductCatalog',
                    },
                    {
                        name: <Link to="/products">Products</Link>,
                        Link: '/products',
                        icon: 'Product',
                    },
                    {
                        name: <Link to="/filters">Filters</Link>,
                        Link: '/filters',
                        icon: 'Filter',
                    },
                    {
                        name: 'Attributes',
                        links: [
                            {
                                name: <Link to="/attributes">Attributes</Link>,
                                Link: '/attributes',
                            },
                            {
                                name: <Link to="/attributesgroup">Attributes Groups</Link>,
                                Link: '/attributesgroup',
                            },
                        ],
                    },


                ],
            },
        ];
        return (
            <Nav ariaLabel="Nav example with nested links" groups={navLinkGroups} onLinkClick={_tisdata} />
        );
    }
    const _tisdata = (event, element) => {
        if (element.Link === "" || element.Link === undefined) {
            // console.log(" element.Link empty");
        } else {
            dispatch({ type: 'NUMBER_Change', payload: Math.floor(Math.random() * (1000 - 100 + 1)) + 100, breadCrumbs: element.Link.slice(1) })
        }
    }
    return (
        <div className={drawerClasses}>
            <div className="side-drawer-logo">
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>
            <div class="side-drawer-menu">
                {leftMenu()}
            </div>
        </div>
    );
}