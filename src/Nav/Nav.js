import React from 'react';
import Logo from "../Logo/Logo";
import MarkoLogo from '../img/logoMarko.png'
import {NavLink} from "react-router-dom";

const Nav = props => {
    return(

        <div>
            <div>
                <Logo logo={MarkoLogo} alt={'Обувь оптом от производителя'} width={'217'} height={'48'}/>
                <input type="search"/>
                <ul>
                    <li><div></div><div>Личный кабинет</div></li>
                    <li><div></div><div>Избранное</div></li>
                    <li><div></div><div>Заказы</div></li>
                    <li><div></div><div>380500</div></li>  {/*Указывается цена со знаком валюты и значек грузовика а не карзины*/}
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
                        <li><NavLink to={'/'}>Акция</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Nav