import React from "react";
import scss from "./Digital.module.scss";
import HeaderDig from "./heder/HeaderDig";
import avatar from "../../images/digital/avatar.svg"
import icon from "../../images/digital/icon.svg"
import icon1 from "../../images/digital/icon1.svg"
function DigitalBlog() {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    {
      path: "/blog/course",
      label: "The Complete Digital Marketing Course - 12 Courses in 1",
    },
  ];

  return (
    <div className={scss.wrap}>
      <div className={scss.wrap__header}>
        <HeaderDig items={breadcrumbItems} />
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9tL1m9MXaXQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className={scss.wrap__main}>
        <h6>
        8 minutes read
        </h6>
        <h2>
        The Complete Digital Marketing Course - 12 Courses in 1
        </h2>
        <p>
        Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
        </p>
        <hr/>
        <div className={scss.wrap__foot}>
        <img src={avatar} alt="avatar"/>
        <div className={scss.foot__title}>
        <h6>Jane Cooper</h6>
        <p>16 Mar 2020 12:35 PM</p>
        </div>
        <div className={scss.foot__avatar}>
            <img src={icon} alt="icon"/>
            <img src={icon1} alt="icon1"/>
        </div>
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default DigitalBlog;
