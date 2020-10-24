import React from 'react';
import classes from './Header.module.css'
import Nav from "../../Nav/Nav";

const Header = props => {
    return(

        <header>
            <div className={classes.header}>
                <div>+7 (499) 350-07-94</div>
                <ul>
                    <li>О компании</li>
                    <li>Бренды</li>
                    <li>Партнерам</li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                </ul>

                <Nav/>

            </div>
        </header>

    )
}

export default Header