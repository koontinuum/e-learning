import React from 'react'
import scss from './BraedCrumb.module.scss'
import image from '../../images/DetailsIcon/BreadCrumb.svg'

function BreadCrumb() {
  return (
    <div className={scss.wrapper}>
        <p>Design</p>
        <img src={image} alt="icon" />
        <p>Graphic Design & Illustration</p>
        <img src={image} alt="icon" />
        <p className={scss.action}>The Complete Digital Marketing Course - 12 Courses in 1</p>
    </div>
  )
}

export default BreadCrumb