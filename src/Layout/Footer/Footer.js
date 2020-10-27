import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = props => {
    return(
        <section>
            <div>
                <h4>Партнерам</h4>
                <ul>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Условия</NavLink></li>
                    <li><NavLink to={'/'}>Возможности</NavLink></li>
                    <li><NavLink to={'/'}>Правила</NavLink></li>
                </ul>
            </div>
            <div>
                <h4>Компания</h4>
                <ul>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                </ul>
            </div>
            <div>
                <h4>Продукция</h4>
                <ul>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                </ul>
            </div>
            <div>
                <h4>Контакты</h4>
                <ul>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                    <li><NavLink to={'/'}>Зарегистрироваться</NavLink></li>
                </ul>
            </div>
            <div>Копирайт</div>
        </section>
    )
}

export default Footer