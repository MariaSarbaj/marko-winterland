import React from 'react';
import ContactFormBig from "../ContactFormBig/ContactFormBig";
import PicText from "../PicText/PicText";
import pic from '../img/MarkoCatalog.jpg';
import classes from './FormSection.module.css'
import Wrapper from "../Wrapper/Wrapper";

const FormSection = () => {
    return(
        <section className={classes.FormSection}>
            <Wrapper styleClass = {"Wrapper Wrapper__formSection"}>
                <ContactFormBig
                    header={'Скачать каталог продукции'}
                    span={'Ввведите адресс электронной почты и получите каталог продукции на почту'}
                    button={'Скачать каталог'}
                    desc={'397 постояных клиентов оценивают нашу работу на отлично'}
                />
                <PicText
                    title={'Обувь которую любят ваши покупатели'}
                    text={'Скачайте каталог обувной продукции  \n' +
                    'и пообщайтись с нашими консультантами, они подскажут какие модели пользуются наибольшим спросом.'}
                    alt={'Picture'}
                    src={pic}
                />
            </Wrapper>
        </section>
    )
}

export default FormSection