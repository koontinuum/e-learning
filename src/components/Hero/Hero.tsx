import React from 'react'
import scss from './Hero.module.scss'
import strelka from '../../images/heroIcon/strelka.svg'
import pause from '../../images/heroIcon/pause.svg'
import image from '../../images/heroIcon/image.svg'

function Hero() {
  return (
    <div className={scss.wrapper}>
        <div className={scss.box}>
            <div className={scss.box__left}>
                <h2>Free <span>Online</span> <span className={scss.decoration}>Courses</span> From The Experts</h2>
                <div className={scss.left__text}>
                    <p>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </p>
                </div>
                <div className={scss.left__btn}>
                    <button>Ready Start <img src={strelka} alt="" /></button>
                    <div className={scss.btn__text}>
                        <div><img src={pause} alt="" /></div>
                        <h6>Watch Video</h6>
                    </div>
                </div>
                <div className={scss.line}></div>
                <div className={scss.left__infa}>
                    <div className={scss.learners}>
                        <div>
                            <h3>14k+</h3>
                            <p>Learners</p>
                        </div>
                    </div>
                    <div className={scss.courses}>
                        <div>
                            <h3>1,05k+</h3>
                            <p>Courses</p>
                        </div>
                    </div>
                    <div className={scss.graduates}>
                        <div>
                            <h3>59k+</h3>
                            <p>Graduates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.box__right}>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero