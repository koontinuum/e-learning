/* eslint-disable jsx-a11y/alt-text */
import scss from "./InterComp.module.scss";
import imgInterComp from "../../images/interComp/IMG.svg";
import line from "../../images/interComp/Rectangle 530.svg";
function InterComp() {
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.wrapper__title}>
          <h5 className={scss.title__h5}>Nullam accumsan lorem in dui.</h5>
        </div>
        <div className={scss.wrapper__main}>
          <div className={scss.main__img}>
            <img src={imgInterComp} alt="user"/>
          </div>
          <div className={scss.main__title}>
            <div>
              <h6 className={scss.title__h6}>
                Phasellus gravida semper nisi. Vestibulum rutrum, mi
              </h6>
            </div>
            <div className={scss.title__p}>
              <p>
                Curabitur a felis in nunc fringilla tristique. Fusce egestas
                elit eget lorem. Etiam vitae tortor. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                hymenaeos.
              </p>
            </div>
            <div className={scss.title__description}>
              <div className={scss.description__left}>
                <img className={scss.description__img} src={line} alt="line"/>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis
                </p>
              </div>
              <div className={scss.description__right}>
                <img className={scss.description__img} src={line} alt="line"/>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterComp;
