import React from 'react'
import scss from './OnlineCourses.module.scss'
import icon from '../../images/OnlineCoursesIcon/illustration_courses_hero.svg'

function OnlineCourses() {
  return (
    <div className={scss.wrapper}>
        <div className={scss.left}>
            <div className={scss.left_text}>
                <h1>Online Courses</h1>
                <p>Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</p>
            </div>
            <button>Browse Courses</button>
        </div>
        <img src={icon} alt="" />
    </div>
  )
}

export default OnlineCourses