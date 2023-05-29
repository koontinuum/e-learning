import React from 'react'
import scss from './Newsletter.module.scss'
import image from '../../images/NewsletterIcon/image.svg'

function Newsletter() {
  return (
    <div className={scss.wrapper}>
        <div className={scss.box}>
            <div className={scss.box__action}>
                <div className={scss.action_text}>
                    <h3>Register Now Forget 20% Discount Every Courses</h3>
                    <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus, fermentum eu</p>
                </div>
                <div className={scss.action_input}>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Register</button>
                </div>
            </div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Newsletter