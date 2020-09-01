import React, { useState,useEffect} from "react";
import './Breadcrumbs.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useSelector } from "react-redux";


function Breadwrp(props) {

  const breadcrumb = useSelector(state => state.log.breadCrumb);
  const [IconProp,setIconProps] = useState(props);

  const productIcon = () => {
    return (
        <div>
            {props.productIcon}
        </div>
    );
  }

  const categoryIcon = () => {
    return (
         <div>
           {props.categoryIcon}
        </div>
    );
  }
  const filterIcon = () => {
    return (
         <div>
           {props.filterIcon}
        </div>
    );
  }
  
  return (
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
      {
        (IconProp.iconButton == 0) ? (<>
          {productIcon()}
          </>) : (IconProp.iconButton == 1) ?
          (<>
              {categoryIcon()}
          </>) :(IconProp.iconButton == 2) ?
          (<>
              {filterIcon()}
          </>) : null
      }
    </div>
  )
}

export default Breadwrp

