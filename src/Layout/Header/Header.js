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
                    <a href='https://t.me/Marko_Obuv_bot' target="_blank" title="Написать в Telegram">
                        <i className="fab fa-telegram-plane"></i>
                    </a>
                    <a to='/viber://pa?chatURI=obuv_optom'>
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <NavLink to={'/'}>
                        <i className="fab fa-facebook-f"></i>
                    </NavLink>
                    <a href='viber://pa?chatURI=obuv_optom' target="_blank" title="Написать в Viber">
                        <i className="fab fa-viber"></i>
                    </a>
                    <NavLink to={'/'}>
                        <i className="fab fa-vk"></i>
                    </NavLink>
                    <a href="mailto:info@marko-opt.ru?subject=Хочу узнать подробнее" title="Написать на эл. почту">
                        <i className="far fa-envelope"></i>
                    </a>
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