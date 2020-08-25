import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Dashboard from "../pages/Dashboard";
import Filters from "../pages/Filters";
import Extension from '../pages/Extension';

export default function router() {
    return (
        <Router>
            <Switch>
                <Route path='/c'>
                    <Catalog />
                </Route>
                <Route path='/a'>
                    <Filters />
                </Route>
                <Route path='/b'>
                    <Extension />
                </Route>
                <Route path='/'>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

