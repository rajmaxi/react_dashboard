import React from 'react';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton';
import logo from '../assets/images/logo.png';
import './Topbar.css';
import { MdNotificationsNone } from "react-icons/md";
import { MdHome } from "react-icons/md"

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/"><img src={logo} alt="logo" /></a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/"><MdNotificationsNone size={24} /></a>
          </li>
          <li>
            <a href="/"><MdHome size={24} /></a>
          </li>
          <li>
            <a className="toolbar_nav_last" href="/">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar