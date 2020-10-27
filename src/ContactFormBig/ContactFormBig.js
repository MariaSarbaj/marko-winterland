import React from 'react';
import classes from './ContactFormBig.module.css'
import {Email} from "./smtp";
import {IMaskInput} from 'react-imask'


const ContactFormBig = props => {


    // eslint-disable-next-line no-undef
    const emailSend = () => { console.log('Test')
        Email.send({
        Host : "imta.icu",
        Username : "smtp@imta.icu",
        Password : "Marko19530",
        To : 'smtp@imta.icu',
        From : `${input.name}`,
        Subject : "Лид promo.marko-opt.ru, Тел." + input.tel,
        Body : `Эл. почта: ${input.name} \n
                Тел: ${input.tel} \n
                Каталог: ${input.prod}`
    }).then(
        message => console.log(message)
    );}

    const input = {
        prod: 'Полный каталог обуви'
    }

    const clickHandler = (event) => {
        event.preventDefault()
        const val = event.target.parentNode.children
        val[0].value = ''
        val[1].value = ''
        val[2].value = ''
        console.log(input)
        emailSend()
    }

    const inputHandlerName = (event) => {
        input.name = event

    }

    const inputHandlerTel = (event) => {
        input.tel = event

    }

    const inputHandlerProduct = (event) => {
        console.log(event.target.value)
        input.prod = event.target.value

    }

    return(
        <div className={classes.ContactFormBig}>
            <h4>{props.header}</h4>
            <span>{props.span}</span>
            <form action="">

                <IMaskInput
                    required={true}
                    mask={String}
                    radix="."
                    value=""
                    unmask={false} // true|false|'typed'
                    lazy={false}
                    placeholderChar={'_'}
                    onBlur={
                        (value, mask) => {
                            console.log(value.target.value)
                            inputHandlerName(value.target.value)
                        }
                    }
                    placeholder='Адрес эл. почты'
                />

                <IMaskInput

                    mask={'+{7}(000)000-00-00'}
                    radix="."
                    value=""
                    unmask={false} // true|false|'typed'
                    lazy={false}
                    placeholderChar={'_'}
                    onBlur={
                        (value, mask) => {
                            console.log(value.target.value)
                            inputHandlerTel(value.target.value)
                        }
                    }
                    placeholder='Номер телефона'
                />

                {/*<input type="text"   onBlur={inputHandlerName}/>*/}
                {/*<input type="text" onBlur={inputHandlerTel}/>*/}
                <select type="select" onBlur={inputHandlerProduct}>
                    <option value="Полный каталог обуви">Полный каталог обуви</option>
                    <option value="Каталог мужской обуви">Каталог мужской обуви</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                </select>
                <button onClick={clickHandler}>{props.button}</button>
                <div>
                    <ul>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <span className={classes.ContactFormBig__clients}>{props.desc}</span>
                </div>
            </form>

        </div>
    )
}

export default ContactFormBig