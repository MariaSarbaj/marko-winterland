import React from 'react';
import Logo from "../Logo/Logo";
import MarkoLogo from '../img/logoMarko.png'
import {NavLink} from "react-router-dom";
import classes from './Nav.module.css'

const Nav = () => {
    return(

        <div className={classes.nav}>
            <div>
                <Logo logo={MarkoLogo} alt={'Обувь оптом от производителя'} width={'217'} height={'48'}/>
                <input type="search"/>
                <ul>
                    <li><NavLink to={'/'}>Личный кабинет</NavLink></li>
                    <li><NavLink to={'/'}>Избранное</NavLink></li>
                    <li><NavLink to={'/'}>Заказы</NavLink></li>
                    <li><NavLink to={'/'}>380500</NavLink></li>  {/*Указывается цена со знаком валюты и значек грузовика а не карзины*/}
                </ul>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><NavLink to={'/'}>Мужская обувь</NavLink></li>
                        <li><NavLink to={'/'}>Женская обувь</NavLink></li>
                        <li><NavLink to={'/'}>Детская обувь</NavLink></li>
                        <li><NavLink to={'/'}>Спортивная обувь</NavLink></li>
                        <li><NavLink to={'/'}>Новинки</NavLink></li>
                        <li><NavLink to={'/'}>Акции</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Nav