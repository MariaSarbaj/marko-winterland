import React from 'react';
import picture from '../img/MarkoShop.jpeg'
import classes from './Description.module.css'
import Wrapper from "../Wrapper/Wrapper";

const Description = props => {
    return(
        <section className={classes.desc}>
            <Wrapper styleClass={'wrapper wrapper__desc'}>
                <h2>Почему обувь Марко так популярна в России?</h2>
                <div className={classes.desc__wrapper}>
                    <img src={picture} alt="" width={550} height={412}/>
                    <div>
                        <h3>Качество</h3>
                        <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>
                        <h3>Качество</h3>
                        <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>
                        <h3>Качество</h3>
                        <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Description