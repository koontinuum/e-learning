import scss from './Nullam.module.scss'
import { NullamData } from '../../objects/NullamData'
import image from '../../images/NullamIcon/IMG.svg'
import { useTranslation } from 'react-i18next';

function Nullam() {

  const { t } = useTranslation();

    return (
        <div className={scss.wrapper}>
            <div className={scss.top}>
                <p>{t("Nullam.Nullam__txt2")}</p>
                <div className={scss.top_text}>
                    <h3>{t("Nullam.Nullam__title")}</h3>
                    <p>{t("Nullam.Nullam__txt")}</p>
                </div>
            </div>
            <div className={scss.bottom}>
                <div className={scss.bottom_left}>
                    {
                        NullamData.map(item => (
                            <div className={scss.left_item} key={item.id}>
                                <div>
                                    <h4>{t("NullamBox.NullamBox_title")}</h4>
                                    <h2>{item.number}</h2>
                                </div>
                                <p>{item.txt}</p>
                            </div>
                        ))
                    }
                </div>
                <img src={image} alt="Img" />
            </div>
        </div>
    )
}

export default Nullam