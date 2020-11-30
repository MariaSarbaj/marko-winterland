import React from 'react';
import classes from './ContactFormBig.module.css'
import BitrixForm from "../BitrixForm/BitrixForm";
import B24Form from "../B24Form/B24Form";


const ContactFormBig = props => {

    return(
        <div className={classes.ContactFormBig}>
            <h4>{props.header}</h4>
            <span>{props.span}</span>

            <div className={'BitrixForm'}>
            <B24Form/>
            </div>
                <div>
                    <ul>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <span className={classes.ContactFormBig__clients}>{props.desc}</span>
                </div>


        </div>
    )
}

export default ContactFormBig