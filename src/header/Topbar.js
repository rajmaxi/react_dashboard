import React from 'react';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton';
// import DrawerToggleButton from '../sideMenu/SideDrawer/DrawerToggleButton'
import './Topbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar