import React from 'react';
import classes from './PicText.module.css'

const PicText = props => {
    return(
        <div className={classes.PicText__wrapper}>
            <h3 className={classes.PicText__title}>{props.title}</h3>
            <span className={classes.PicText__text}>{props.text}</span>
            <img className={classes.PicText__img} src={props.src} alt={props.alt} width={550}/>
        </div>
    )
}

export default PicText