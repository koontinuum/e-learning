import React from 'react'
import scss from './WeWorkWith.module.scss'
import { WeWorkWithData } from '../objects/WeWorkWithData'
import spotify from '../../images/WeWorkWith/brand_spotify.svg'
import slack from '../../images/WeWorkWith/stack.svg'

function WeWorkWith() {
  return (
    <div className={scss.wrapper__brands}>
        <div>
            <h2>We Work With</h2>
    <p>Quisque aliquet, libero consequat elementum convallis.</p>
    </div>
    <div className={scss.brands}> 
    {
        WeWorkWithData.map(item => (
            <div key={item.id}>
                <img src={item.img} alt="" />
            </div>
        ))
    }
    <div className={scss.adaptive}>
        <img src={spotify} alt="" />
        <img src={slack} alt="" />
    </div>
    </div>
    
    </div>
  )
}

export default WeWorkWith