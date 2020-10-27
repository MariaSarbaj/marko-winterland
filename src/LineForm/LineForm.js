import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './LineForm.module.css'

const LineForm = props => {
    return(
        <div className={classes.LineForm}>
            <h5>Не знаете с чего начать? <span>Скачайте каталог продукции...</span></h5>
            <NavLink to={'/'}>Скачать Каталог</NavLink>
        </div>
    )
}

export default LineForm