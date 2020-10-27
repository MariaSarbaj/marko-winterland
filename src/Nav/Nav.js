import React from 'react';
import Logo from "../Logo/Logo";
import MarkoLogo from '../img/logoMarko.png'
import {NavLink} from "react-router-dom";
import classes from './Nav.module.css'

const Nav = () => {
    return(

        <div className={classes.nav}>
            <div className={classes.usermenu}>
                <Logo logo={MarkoLogo} alt={'Обувь оптом от производителя'} width={'217'} height={'48'}/>
                <input className={classes.searchform__input} type="search" results={5} placeholder={"Поиск..."}/>
                <ul>
                    <li><NavLink to={'/'}>
                        <i className="far fa-user"></i>
                        Личный кабинет</NavLink></li>
                    <li><NavLink to={'/'}>
                        <i className="far fa-heart"></i>
                        Избранное</NavLink></li>
                    <li><NavLink to={'/'}>
                        <i className="far fa-list-alt"></i>
                        Заказы</NavLink></li>
                    <li><NavLink to={'/'}>
                        <i className="fas fa-dolly"></i>
                        380 500 ₽</NavLink>
                    </li>
                </ul>
            </div>
            <nav className={classes.mainnav}>
                <button>
                    <i className="fas fa-stream"></i>
                    Каталог</button>
                <ul>
                    <li><NavLink to={'/'}>Мужская обувь</NavLink></li>
                    <li><NavLink to={'/'}>Женская обувь</NavLink></li>
                    <li><NavLink to={'/'}>Детская обувь</NavLink></li>
                    <li><NavLink to={'/'}>Спортивная обувь</NavLink></li>
                    <li><NavLink to={'/'}>Новинки</NavLink></li>
                    <li><NavLink className={classes.aActive} to={'/'}>Акции</NavLink></li>
                </ul>
            </nav>
        </div>

    )
}

export default Nav