import React from "react";
import './Breadcrumbs.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { IconButton } from 'office-ui-fabric-react';
import { initializeIcons } from "office-ui-fabric-react"
import { useSelector } from "react-redux";
initializeIcons();

const plus = { iconName: 'CirclePlus' };
const Copy = { iconName: 'Copy' };
const Delete = { iconName: 'Delete' };
const Save = { iconName: 'Save' };
// const bradcumbTitle = ['Dashboard','Categories','Products','Filters','Attributes','Attribute Groups']



function Breadwrp() {
  const breadcrumb = useSelector(state => state.log.breadCrumb);
  return (
    <div>
      <div className="breadmain">
        <div className="bread-left">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
              Pages
                </Link>
            <Link color="inherit" href="/">
              Home
                </Link>
                <Link color="inherit">
                  {breadcrumb}
                </Link>
          </Breadcrumbs>
        </div>
        <div className="bread-right">
          <IconButton iconProps={plus} className="prim" />
          <IconButton iconProps={Copy} className="defa" />
          <IconButton iconProps={Delete} className="dang" />
          <IconButton iconProps={Save} className="prim" />
        </div>
      </div>
    </div>
  )
}

export default Breadwrp

