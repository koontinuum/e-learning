import React from 'react'
import scss from './GetInTouch.module.scss'
import { GetInTouchData } from '../../objects/GetInTouchData'
import facebook from '../../images/FooterIcon/facebook.svg'
import instagram from '../../images/FooterIcon/instagram.svg'
import inn from '../../images/FooterIcon/in.svg'
import twitter from '../../images/FooterIcon/twitter.svg'


function GetInTouch() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.left}>
                <h2>Get In Touch</h2>
                <div className={scss.left__infa}>
                    {
                        GetInTouchData.map(item => (
                            <div className={scss.infa_email} key={item.id}>
                                <div className={scss.email_icon}>
                                    <img src={item.icon} alt="Email" />
                                    <p>{item.title}</p>
                                </div>
                                <p>{item.txt}</p>
                            </div>
                        ))
                    }
                    <div className={scss.line}></div>
                    <div className={scss.infa_follow}>
                        <p>FOLLOW US</p>
                        <div className={scss.buttonSocial}>
                            <img src={facebook} alt="Facebook" />
                            <img src={instagram} alt="Instagram" />
                            <img src={inn} alt="In" />
                            <img src={twitter} alt="Twitter" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.right}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.0151124917113!2d74.58438977937367!3d42.85552989384715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2z0JDQt9C40Y8g0JzQvtC70Ls!5e0!3m2!1sru!2skg!4v1685379029969!5m2!1sru!2skg" width="662" height="498" loading="lazy"/>
            </div>
        </div>
    )
}

export default GetInTouch