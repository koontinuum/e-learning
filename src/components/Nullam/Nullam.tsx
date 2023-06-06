import React from 'react'
import scss from './Nullam.module.scss'
import { NullamData } from '../../objects/NullamData'
import image from '../../images/NullamIcon/IMG.svg'

function Nullam() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <p>Nullam accumsan lorem in dui.</p>
                <div className={scss.top_text}>
                    <h3>Effective Forms Advertising Internet Web Site</h3>
                    <p>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility and even when it is it almost always leaves broken Windows</p>
                </div>
            </div>
            <div className={scss.bottom}>
                <div className={scss.bottom_left}>
                    {
                        NullamData.map(item => (
                            <div className={scss.left_item} key={item.id}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <h2>{item.number}</h2>
                                </div>
                                <p>{item.txt}</p>
                            </div>
                        ))
                    }
                </div>
                <img src={image} alt="Img" />
            </div>
        </div>
    )
}

export default Nullam