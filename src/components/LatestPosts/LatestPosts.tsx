import React, { useState, useEffect} from 'react'
import scss from './LatestPosts.module.scss'
import strelka from '../../images/LatestPostIcon/strelka.svg'
import krug from '../../images/LatestPostIcon/Ellipse 16.svg'
import { LatestPostData } from '../../objects/LatestPostsData'
import { useTranslation } from 'react-i18next'

function LatestPosts() {

    const { t } = useTranslation();

    return (
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <h2>{t("LatestPost.LatestPost__title")}</h2>
                <button>{t("LatestPost.LatestPost__txt")} <img src={strelka} alt="" /></button>
            </div>
            <div className={scss.bottom}>
                {
                    LatestPostData.map(item => (
                        <div className={scss.card} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={scss.card__infa}>
                                <div className={scss.infa__left}>
                                    <p>{item.month}</p>
                                    <div className={scss.line}></div>
                                    <h3>{item.data}</h3>
                                </div>
                                <div className={scss.infa__right}>
                                    <div className={scss.right__top}>
                                        <h5>{item.title}</h5>
                                        <p>Moment in the life of any aspiring astronomer of that it is time to.</p>
                                    </div>
                                    <div className={scss.right__bottom}>
                                        <img src={item.avatar} alt="" />
                                        <div className={scss.name}>
                                            <p>{item.name}</p>
                                            <p className={scss.min}>8 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className={scss.bottom_smallCard}>
                {
                    LatestPostData.map(item => (
                        <div className={scss.smallCard} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={scss.smallCard__text}>
                                <h5>{item.title}</h5>
                                <div className={scss.smallCard__infa}>
                                    <p>May 29, 2017</p>
                                    <img src={krug} alt="" />
                                    <p className={scss.min}>8 min read </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <button>View All <img src={strelka} alt="" /></button>
        </div>
    )
}

export default LatestPosts