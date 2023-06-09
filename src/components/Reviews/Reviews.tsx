import React from 'react'
import scss from './Reviews.module.scss'

function Reviews() {
  return (
    <div className={scss.wrapper}>
        <div className={scss.top}>
            <h3>Reviews</h3>
            <select name="" id="">
                <option value="Newest">Newest</option>
                <option value="Old">Old</option>
            </select>
        </div>
        <div className={scss.bottom}>

        </div>
    </div>
  )
}

export default Reviews