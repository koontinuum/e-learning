import React from 'react'
import scss from './Footer.module.scss'
import logo from '../../images/FooterIcon/Logo.svg'
import email from '../../images/FooterIcon/Email.svg'
import loco from '../../images/FooterIcon/location.svg'
import strelka from '../../images/FooterIcon/strelka.svg'
import facebook from '../../images/FooterIcon/facebook.svg'
import instagram from '../../images/FooterIcon/instagram.svg'
import inn from '../../images/FooterIcon/in.svg'
import twitter from '../../images/FooterIcon/twitter.svg'


function Footer() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.line}></div>
            <div className={scss.content}>
                <img src={logo} alt="Zone" />
                <div className={scss.infa}>
                    <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>
                    <div className={scss.buttonSocialMini}>
                        <button> <img src={facebook} alt="facebook" /></button>
                        <button> <img src={instagram} alt="instgram" /></button>
                        <button> <img src={inn} alt="inn" /></button>
                        <button> <img src={twitter} alt="twitter" /></button>
                    </div>
                    <div className={scss.contact}>
                        <div className={scss.email}>
                            <img src={email} alt="Email" />
                            <p>info@example.com</p>
                        </div>
                        <div className={scss.location}>
                            <img src={loco} alt="location" />
                            <p>655 Schaefer Dale</p>
                        </div>
                    </div>
                    <div className={scss.action}>
                        <input type="email" placeholder='Email address' />
                        <button> <img src={strelka} alt="button" /> </button>
                    </div>
                </div>
                <div className={scss.buttonSocial}>
                    <button> <img src={facebook} alt="facebook" /></button>
                    <button> <img src={instagram} alt="instgram" /></button>
                    <button> <img src={inn} alt="inn" /></button>
                    <button> <img src={twitter} alt="twitter" /></button>
                </div>
                <div className={scss.copyright}>
                    <p>© 2021. All rights reserved</p>
                    <div>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer