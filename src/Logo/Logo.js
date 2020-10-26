import React from "react";
import {NavLink} from "react-router-dom";
import classes from './logo.module.css'


const Logo = props =>{
    return(
        <NavLink className = {classes.logo} to="/#">
            <img className = {classes.logo__img} src={props.logo} alt={props.alt} width={props.width} height={props.height}/>
        </NavLink>
    )
}

export default Logo