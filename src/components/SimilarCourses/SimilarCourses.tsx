import scss from './SimilarCourses.module.scss'
import strelka from '../../images/LatestPostIcon/strelka.svg'
import card1 from '../../images/SimilarCourses/card1.svg'
import star from '../../images/DetailsIcon/star.svg'
import avatr from '../../images/LessonsIcon/avatar.svg'
import clock from '../../images/SimilarCourses/clock.png'
import step from '../../images/SimilarCourses/ic_skill_level_intermediate.svg'
import { SimilarCoursesData } from '../../objects/SimilarCoursesData'


function SimilarCourses() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <h3>Similar Courses</h3>
                <button><a href=""> View All <img src={strelka} alt="" /> </a></button>
            </div>
            <div className={scss.bottom}>
                {
                    SimilarCoursesData.map(item => (
                        <div className={scss.card} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={scss.infa}>
                                <div className={scss.infa_top}>
                                    <p>Management</p>
                                    <div>
                                        <p>{item.price}</p>
                                        <h4>$59</h4>
                                    </div>
                                </div>
                                <h6>The Complete Product Management Cours</h6>
                                <div className={scss.infa_midlle}>
                                    <div className={scss.raiting}>
                                        <img src={star} alt="Star" />
                                        <h6>4.8</h6>
                                        <p>(1,089)</p>
                                    </div>
                                    <div className={scss.line}></div>
                                    <div className={scss.students}>
                                        <p>180k</p>
                                        <p className={scss.student}> students</p>
                                    </div>
                                </div>
                                <div className={scss.profile}>
                                    <img src={avatr} alt="" />
                                    <div className={scss.profile_name}>
                                        <p>{item.name}</p>
                                        <span>+10 teachers</span>
                                    </div>
                                </div>
                            </div>
                            <div className={scss.linee}></div>
                            <div className={scss.items}>
                                <div className={scss.item}>
                                    <img src={clock} alt="Clock" />
                                    <p>100 hours</p>
                                </div>
                                <div className={scss.item}>
                                    <img src={step} alt="Level" />
                                    <p>Beginner</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarCourses