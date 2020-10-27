import React from 'react';
import pic1 from '../img/u14105.png'
import pic2 from '../img/u14097.png'
import pic3 from '../img/u14117.png'
import pic4 from '../img/u14127.png'
import pic5 from '../img/u14227.png'
import {NavLink} from "react-router-dom";
import classes from './ProducktTypes.module.css'
import Wrapper from "../Wrapper/Wrapper";

const ProductTypes = props => {
    return(
        <section className={classes.products}>
            <Wrapper styleClass={'wrapper'}>
                <ul className={classes.productsList}>
                    <li><NavLink to={'/'}>
                        <img src={pic1} alt="Мужская обувь"/>
                        <h3>Мужская обувь</h3>
                        <p>Более 958 моделей</p>
                    </NavLink>
                    </li>

                    <li><NavLink to={'/'}>
                        <img src={pic2} alt="Женская обувь"/>
                        <h3>Женская обувь</h3>
                        <p>Более 1495 моделей</p>
                    </NavLink>
                    </li>

                    <li><NavLink to={'/'}>
                        <img src={pic3} alt="Детская обувь"/>
                        <h3>Детская обувь</h3>
                        <p>Более 1395 моделей</p>
                    </NavLink>
                    </li>

                    <li><NavLink to={'/'}>
                        <img src={pic5} alt="Спортивная обув"/>
                        <h3>Спортивная обувь</h3>
                        <p>Более 735 моделей</p>
                    </NavLink>
                    </li>

                    <li><NavLink to={'/'}>
                        <img src={pic4} alt="Аксесуары"/>
                        <h3>Аксесуары</h3>
                        <p>Более 230 моделей</p>
                    </NavLink>
                    </li>
                </ul>
            </Wrapper>
        </section>
    )
}

export default ProductTypes