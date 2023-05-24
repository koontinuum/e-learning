import React, { useState, useEffect } from 'react'
import scss from './FeaturedCategory.module.scss'
import { FeaturedCategoreData } from '../../objects/FeaturedCategoryData'

function FeaturedCategory() {
    const [windowSize, setWindowSize] = useState<{ width: number }>({
        width: window.innerWidth
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const index: number = windowSize.width < 900 ? 1 : 0;

    return (
        <div className={scss.wrapper}>
            <div className={scss.left}>
                <div className={scss.left__text}>
                    <h2>Featured Category</h2>
                    <p>Since wire-frame renderings are relatively <br /> simple and fast to calculate, they are often <br /> used in cases</p>
                </div>
                <button>Explore more</button>
            </div>
            <div className={scss.right}>
                {
                    FeaturedCategoreData.slice(index).map(item => (
                        <div className={scss.card} key={item.id}>
                            {item.title}
                            <p>{item.txt}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedCategory