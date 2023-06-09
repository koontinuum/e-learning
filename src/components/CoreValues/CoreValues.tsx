import React from 'react'
import scss from './CoreValues.module.scss'
import { CoreValuesData } from '../../objects/CoreValuesData'

function CoreValues() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <h2>Core Values</h2>
                <p>Etiam ultricies nisi vel augue. Suspendisse potenti. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus viverra nulla ut metus varius laoreet.</p>
            </div>
            <div className={scss.bottom}>
                {
                    CoreValuesData.map(item => (
                        <div className={scss.box} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={scss.box_text}>
                                <h5>{item.title}</h5>
                                <p>{item.txt}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CoreValues