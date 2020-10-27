import React from 'react';
import Wrapper from "../Wrapper/Wrapper";
import {NavLink} from "react-router-dom";
import classes from './MainBaner.module.css'
import img from '../img/K400325-010_F2.jpg'

const MainBanner = props => {
    return(
        <section className={classes.mainBanner}>
            <Wrapper styleClass={'wrapper wrapper__hero'}>
                <div className={classes.hero}>
                    <h1>Обувь оптом от производителя</h1>
                    <h2>Новая зимняя коллекция</h2>
                    <NavLink to={'/'}>Скачать Каталог</NavLink>
                    <NavLink to={'/'}>Получить предложение</NavLink>
                    <p>Производство мужской, женской и детской обуви. Оптовая продажа с доставкой во все регионы России. Только для юридических лиц и ИП</p>
                </div>
                <img src={img} alt="" width={700}/>
            </Wrapper>
        </section>
    )
}

export default MainBanner