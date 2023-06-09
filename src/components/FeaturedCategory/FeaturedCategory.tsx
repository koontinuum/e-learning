import React, { useState, useEffect } from 'react'
import scss from './FeaturedCategory.module.scss'
import { FeaturedCategoreData } from '../../objects/FeaturedCategoryData'
import { useTranslation } from 'react-i18next';

function FeaturedCategory() {
  const { t } = useTranslation();

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
                    <h2>{t("FeaturedCategory.featuredlefttexth2")}</h2>
                    <p>{t("FeaturedCategory.featuredlefttextp")}</p>
                </div>
                <button>{t("FeaturedCategory.featuredleftbtn")}</button>
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