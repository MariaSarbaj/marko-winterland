import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Footer.module.css'
import Wrapper from "../../Wrapper/Wrapper";

const Footer = props => {
    return(
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper}>
                <Wrapper styleClass={'wrapper wrapper__footer'}>
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
                </Wrapper>
            </div>
            <div className={classes.footer__copyright}>
                <Wrapper styleClass={'wrapper'}>
                    <span>Копирайт Копирайт Копирайт Копирайт</span>
                </Wrapper>
            </div>
        </footer>
    )
}

export default Footer