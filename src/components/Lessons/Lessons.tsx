import React from 'react'
import scss from './Lessons.module.scss'
import path_no from '../../images/LessonsIcon/path.svg'
import pause from '../../images/LessonsIcon/pause.svg'
import zamok from '../../images/LessonsIcon/zamok.svg'
import { WhatYouWillData } from '../../objects/WhatYouWillData'
import facebook from '../../images/LessonsIcon/facebook.svg'
import instagram from '../../images/LessonsIcon/instagram.svg'
import inn from '../../images/LessonsIcon/in.svg'
import twitter from '../../images/LessonsIcon/twitter.svg'
import star from '../../images/DetailsIcon/star.svg'
import students from '../../images/LessonsIcon/students.svg'
import money from '../../images/LessonsIcon/money.svg'
import { InstructorsData } from '../../objects/InstructorsData'
import file from '../../images/DetailsIcon/file.svg'
import document from '../../images/LessonsIcon/document.svg'
import data from '../../images/LessonsIcon/data.svg'
import devisec from '../../images/LessonsIcon/devisec.svg'
import certificate from '../../images/LessonsIcon/certificate.svg'

function Lessons() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.left}>
                <div className={scss.left__lessons}>
                    <h4>Lessons</h4>
                    <div className={scss.lessons_items}>
                        <div className={scss.lessons_item}>
                            <div className={scss.item_left}>
                                <img src={pause} alt="" />
                                <p>Lesson 1</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_item}>
                            <div className={scss.item_left}>
                                <img src={pause} alt="" />
                                <p>Lesson 2</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 3</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 4</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 5</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 6</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 7</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 8</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                        <div className={scss.lessons_itemBlock}>
                            <div className={scss.item_left}>
                                <img src={zamok} alt="" />
                                <p>Lesson 9</p>
                            </div>
                            <div className={scss.item_right}>
                                <p>02:23</p>
                                <button><img src={path_no} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={scss.left__what}>
                    <h4>What You Will Learn</h4>
                    <div>
                        {
                            WhatYouWillData.map(item => (
                                <div key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={scss.left__skills}>
                    <h4>Skills You Will Gain</h4>
                    <div>
                        <button>Photography</button>
                        <button>Design</button>
                        <button>Art</button>
                        <button>History</button>
                        <button>Museums</button>
                        <button>Creativity</button>
                        <button>Art History</button>

                    </div>
                </div>
                <div className={scss.left__overview}>
                    <h4>Overview</h4>
                    <p>Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile. </p>
                </div>
                <div className={scss.left__btn}>
                    <p>Share:</p>
                    <div>
                        <button><img src={facebook} alt="Facebook" /> Facebook</button>
                        <button className={scss.insta}> <img src={instagram} alt="Instagram" /> Instagram</button>
                        <button className={scss.in}><img src={inn} alt="In" /> LinkedIn</button>
                        <button className={scss.twit}><img src={twitter} alt="Twitter" /> Twitter</button>
                    </div>
                </div>
                <div className={scss.line}></div>
                <h4>Instructors (4)</h4>
                <div className={scss.left__cards}>
                    {
                        InstructorsData.map(item => (
                            <div className={scss.card} key={item.id}>
                                <img src={item.avatar} alt="" />
                                <div>
                                    <div className={scss.card_infa}>
                                        <h6>{item.name}</h6>
                                        <p>Designer, Illustrator, Animator</p>
                                    </div>
                                    <div className={scss.card_raiting}>
                                        <img src={star} alt="Star" />
                                        <h6>4.8</h6>
                                        <p>(1,089 ratings)</p>
                                    </div>
                                    <div className={scss.card_students}>
                                        <img src={students} alt="Students" />
                                        <div className={scss.students_text}>
                                            <p>1,3k</p>
                                            <p className={scss.text}>students</p>
                                        </div>
                                    </div>
                                    <div className={scss.courses}>
                                        <img src={money} alt="Money" />
                                        <div className={scss.courses_text}>
                                            <p>50</p>
                                            <p className={scss.txt}>courses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={scss.right}>
                <div className={scss.right_top}>
                    <div className={scss.top_price}>
                        <p>$99</p>
                        <h3>$59</h3>
                    </div>
                    <div className={scss.top_description}>
                        <p>This course includes:</p>
                        <div className={scss.item}>
                            <img src={file} alt="File" />
                            <p>20 Lessons</p>
                        </div>
                        <div className={scss.item2}>
                            <img src={document} alt="Document" />
                            <p className={scss.download}>12 Downloadable resources</p>
                        </div>
                        <div className={scss.item3}>
                            <img src={data} alt="Data" />
                            <p>Full lifetime access</p>
                        </div>
                        <div className={scss.item4}>
                            <img src={devisec} alt="Devises" />
                            <p>Access on desktops, tablets, mobile</p>
                        </div>
                        <div className={scss.item5}>
                            <img src={certificate} alt="Certificate" />
                            <p>Certificate of completion</p>
                        </div>
                    </div>
                    <button>Enrol Now</button>
                </div>
                <div className={scss.right_bottom}>
                    <div className={scss.bottom_text}>
                        <div className={scss.text_top}>
                            <h4>Advertisement</h4>
                            <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
                        </div>
                        <button>Go Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lessons