import React, { useEffect, } from 'react'

import './style.css';

import 'office-ui-fabric-react/dist/css/fabric.css';

import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { Nav } from 'office-ui-fabric-react/lib/Nav';

import { useDispatch,} from 'react-redux';

export default function App(props) {
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
                        name: 'Products',
                        Link: '',
                        links: [
                            {
                                name: <Link to="/a">Home</Link>,
                                Link: "'/a'"
                            },
                            {
                                name: <Link to="/b">filter</Link>,
                                Link: "'/b'"
                            },
                            {
                                name: <Link to="/c">cat</Link>,
                                Link: "'/c'"
                            },
                        ],
                    },
                    {
                        name: 'Catalog',
                        links: [
                            {
                                name: 'Catalog1',
                                link: '/a'
                            },
                            {
                                name: 'Catalog 2',
                                link: '/b'
                            },
                            {
                                name: 'Catalog 3',
                                link: '/c'
                            },
                        ],
                    },
                    {
                        name: 'Filters',
                        links: [
                            {
                                name: 'Filters',
                                link: '/a'
                            },
                            {
                                name: 'Filters 2',
                                link: '/b'
                            },
                            {
                                name: 'Filters 3',
                                link: '/c'
                            },
                        ],
                    },
                    {
                        name: 'Extension',
                        links: [
                            {
                                name: 'Extension 1',
                                link: '/a'
                            },
                            {
                                name: 'Extension 2',
                                link: '/b'
                            },
                            {
                                name: 'Extension 3',
                                link: '/c'
                            },
                        ],
                    },
                    {
                        name: 'Page Builder',
                        links: [
                            {
                                name: 'Page Builder 1',
                                link: '/a'
                            },
                            {
                                name: 'Page Builder 2',
                                link: '/b'
                            },
                            {
                                name: 'Page Builder 3',
                                link: '/c'
                            },
                        ],
                    },
                    {
                        name: 'Design',
                        links: [
                            {
                                name: 'Design 1',
                                link: '/a'
                            },
                            {
                                name: 'Design 2',
                                link: '/b'
                            },
                            {
                                name: 'Design 3',
                                link: '/c'
                            },
                        ],
                    },
                    {
                        name: 'Sales',
                        links: [
                            {
                                name: 'Sales 1',
                                link: '/a'
                            },
                            {
                                name: 'Sales 2',
                                link: '/b'
                            },
                            {
                                name: 'Sales 3',
                                link: '/c'
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
        console.log('hi', element);
        if (element.Link == "" || element.Link == undefined) {
            // console.log(" element.Link empty");
        } else {
            dispatch({ type: 'NUMBER_Change', payload: Math.floor(Math.random() * (1000 - 100 + 1)) + 100 })
        }
    }
    return (
        <div className={drawerClasses}>
            {leftMenu()}
        </div>
    );
}