import React, { useEffect, useState } from "react";
import Catalog from "../pages/Catalog";
import Dashboard from "../pages/Dashboard";
import Filters from "../pages/Filters";
import Extension from '../pages/Extension';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from '../header/Topbar';
import SideDrawer from './sideDrawer';
import Backdrop from './backDrop';
import './Nav.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import {
  initializeIcons
} from "office-ui-fabric-react";
import { useSelector } from 'react-redux';
initializeIcons();
export default function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const cartitems = useSelector(state => state.log.isLoading);
  useEffect(() => {
    _closeToggle();
  }, [cartitems])
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };
  //sideMenu (subMenu close)
  const _closeToggle = () => {
    setSideDrawerOpen(false);
  }
  //backDrop close
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop clicking={backDropClickHandler} />
  }
  return (
    <Router>
      <div>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            {/* drawerOpen and close */}
            {
              (sideDrawerOpen) ? (<>
                <SideDrawer show={sideDrawerOpen} />
              </>) : null
            }
            <div className="ms-Grid-col ms-md12 m13">
              <div className="appwrp">
                {/* header */}
                <Topbar drawerToggleClickHandler={drawerToggleClickHandler} />
                {backdrop}
              </div>
              {/* pageNavigation */}
              <div className="rightwrp">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router >
  );
}

