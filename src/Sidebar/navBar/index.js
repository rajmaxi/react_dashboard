import React, { useEffect, useState } from "react";
import Catagories from "../../pages/Catagories";
import Dashboard from "../../pages/Dashboard";
import Filters from "../../pages/Filters";
import Extension from '../../pages/Extension';
import Product from '../../pages/Product';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from '../../header/Topbar';
import SideDrawer from '../sideDrawer';
import Backdrop from '../backDrop';
import EditProduct from '../../pages/Product/EditProduct';
import './style.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import history from '../../pages/History/history';
import {
  initializeIcons
} from "office-ui-fabric-react";
import { useSelector } from 'react-redux';
initializeIcons();
export default function Navbar() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const cartitems = useSelector(state => state.log.isLoading);
  const name = 'John Doe'
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
    <Router history={history}>
      <div>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
           
            {
              (sideDrawerOpen) ? (<>
                <SideDrawer show={sideDrawerOpen} name={name}/>
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
                  <Route path='/' exact component={Dashboard}>  
                    <Dashboard />
                  </Route>
                  <Route path='/categories/:name' component={Catagories}>
                    <Catagories/>
                  </Route>
                  <Route path='/products' component={Product}>
                    <Product />
                  </Route>
                  <Route path='/filters' component={Filters}>
                    <Filters />
                  </Route>
                  <Route path='/attributes' component={Extension}>
                    <Extension />
                  </Route>
                  <Route path='/attributesgroup' component={Dashboard}>
                    <Dashboard />
                  </Route>
                  <Route path='/editproduct' component={EditProduct}>
                    <EditProduct />
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

