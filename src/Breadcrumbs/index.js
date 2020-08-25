import React from "react";
import './Breadcrumbs.css';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {IconButton} from 'office-ui-fabric-react';
import {initializeIcons} from "office-ui-fabric-react"
// import { FontIcon } from 'office-ui-fabric-react/lib/Icon';  
  initializeIcons();

  const plus = { iconName: 'CirclePlus' };
  const PageEdit = { iconName: 'PageEdit' };
  const Delete = { iconName: 'Delete' };
  const Save = { iconName: 'Save' };

  
  

function Breadwrp() {
    return (
        <div>

            <div className="breadmain">
               <div className="bread-left">
                 <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                    Pages
                </Link>
                <Link color="inherit" href="/getting-started/installation/">
                    Home
                </Link>
                <Typography color="textPrimary">Categories</Typography>
                </Breadcrumbs>
              </div>
              <div className="bread-right">
                 <IconButton iconProps={plus} className="prim"/>
                 <IconButton iconProps={PageEdit} className="defa"/>
                 <IconButton iconProps={Delete} className="dang"/>
                 <IconButton iconProps={Save} className="prim"/>
              </div>
           </div>


     


          </div>
    )
}

export default Breadwrp

