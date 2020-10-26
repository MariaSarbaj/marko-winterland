import React from 'react';
import classes from './Header.module.css'
import Nav from "../../Nav/Nav";
import {NavLink} from "react-router-dom";

const Header = props => {
    return(

        <header>
            <div className={classes.header}>
                <div className={classes.header__tel}>+7 (499) 350-07-94</div>
                <div className={classes.socials}>
                    <NavLink to={'/'}>
                        <i className="fab fa-telegram-plane"></i>
                    </NavLink>
                    <NavLink to={'/'}>
                        <i className="fab fa-whatsapp"></i>
                    </NavLink>
                    <NavLink to={'/'}>
                        <i className="fab fa-facebook-f"></i>
                    </NavLink>
                    <NavLink to={'/'}>
                        <i className="fab fa-viber"></i>
                    </NavLink>
                    <NavLink to={'/'}>
                        <i className="fab fa-vk"></i>
                    </NavLink>
                    <NavLink to={'/'}>
                        <i className="far fa-envelope"></i>
                    </NavLink>
                </div>
                <ul className={classes.header__menu}>
                    <li><NavLink to={'/'}>О компании</NavLink></li>
                    <li><NavLink to={'/'}>Бренды</NavLink></li>
                    <li><NavLink to={'/'}>Партнерам</NavLink></li>
                    <li><NavLink to={'/'}>Доставка</NavLink></li>
                    <li><NavLink to={'/'}>Контакты</NavLink></li>
                </ul>

            </div>
            <Nav/>

        </header>

    )
}

export default Header