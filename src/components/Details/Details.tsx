import React from 'react'
import scss from './Details.module.scss'
import star from '../../images/DetailsIcon/star.svg'
import avatar from '../../images/DetailsIcon/avatar.svg'
import clock from '../../images/DetailsIcon/clock.svg'
import level from '../../images/DetailsIcon/level.svg'
import file from '../../images/DetailsIcon/file.svg'
import lang from '../../images/DetailsIcon/lang.svg'
import questions from '../../images/DetailsIcon/questions.svg'
import image from '../../images/DetailsIcon/image.png'
import pause from '../../images/DetailsIcon/pause.svg'
import miniImage from '../../images/DetailsIcon/miniImage.svg'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

function Details() {
    return (
        <div className={scss.wrapper}>
            <BreadCrumb/>
            <div className={scss.infa}>
                <img className={scss.mini} src={miniImage} alt="Image" />
                <div className={scss.infa__left}>
                    <div className={scss.left__text}>
                        <button>BEST SELLER</button>
                        <h3>The Complete Digital Marketing Course - 12 Courses in 1</h3>
                        <p>DESIGN</p>
                        <p className={scss.master}>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</p>
                    </div>
                    <div className={scss.raiting}>
                        <div className={scss.raiting__star}>
                            <img src={star} alt="Raiting" />
                            <h6>4.8</h6>
                            <p>(10,355 reviews)</p>
                        </div>
                        <div className={scss.line}></div>
                        <div className={scss.raiting__students}>
                            <h6>180k</h6>
                            <p>students</p>
                        </div>
                    </div>
                    <div className={scss.profile}>
                        <img src={avatar} alt="Avatar" />
                        <div className={scss.profile__text}>
                            <p>Kristin Watson</p>
                            <span>+10 teachers</span>
                        </div>
                    </div>
                    <div className={scss.linee}></div>
                    <div className={scss.items}>
                        <div className={scss.items__top}>
                            <div className={scss.top_one}>
                                <img src={clock} alt="Levels" />
                                <p>100 hours</p>
                            </div>
                            <div className={scss.top_one}>
                                <img src={level} alt="Clock" />
                                <p>All Levels</p>
                            </div>
                            <div className={scss.top_one}>
                                <img src={file} alt="File" />
                                <p>89 Lessons</p>
                            </div>
                            <div className={scss.top_mini}>
                                <img src={lang} alt="Languages" />
                                <p>English</p>
                            </div>
                            <div className={scss.top_mini}>
                                <img src={questions} alt="Questions" />
                                <p>89 Quizzes</p>
                            </div>
                        </div>
                        <div className={scss.items__bottom}>
                            <div className={scss.top_one}>
                                <img src={lang} alt="Languages" />
                                <p>English</p>
                            </div>
                            <div className={scss.top_one}>
                                <img src={questions} alt="Questions" />
                                <p>89 Quizzes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={scss.infa__right}>
                    <img src={image} alt="Image" />
                    <img className={scss.pause} src={pause} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Details