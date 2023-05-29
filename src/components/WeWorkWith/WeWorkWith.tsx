import React from 'react'
import scss from './WeWorkWith.module.scss'
import { WeWorkWithData } from '../../objects/WeWorkWith/WeWorkWithData'
import spotify from '../../images/WeWorkWith/brand_spotify.svg'
import slack from '../../images/WeWorkWith/stack.svg'
import { useTranslation } from 'react-i18next'

function WeWorkWith() {
    const { t } = useTranslation();
  return (
    <div className={scss.wrapper__brands}>
        <div>
            <h2>{t("WeWorkWith.H2")}</h2>
    <p>{t("WeWorkWith.titleWorkTextP")} </p>
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