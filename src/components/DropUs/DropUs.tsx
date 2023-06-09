import React from 'react'
import scss from './DropUs.module.scss'
import image from '../../images/DropUsIcon/illustration_courses_contact.svg'

function DropUs() {
  return (
    <div className={scss.wrapper}>
        <img src={image} alt="Image" />
        <div className={scss.right}>
            <div className={scss.right__text}>
                <h3>Drop us a line</h3>
                <p>We normally respond within 2 business days</p>
            </div>
            <div className={scss.right__action}>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Subject'/>
                <textarea name="Message">Message</textarea>
            </div>
            <button>Send Message</button>
        </div>
    </div>
  )
}

export default DropUs