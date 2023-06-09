import React from "react";
import Header from "../components/header/Header";
import OnlineCourses from "../components/OnlineCourses/OnlineCourses";
import Nullam from "../components/Nullam/Nullam";
import CoreValues from "../components/CoreValues/CoreValues";
import OurTeachers from "../components/ourTeachers/OurTeachers";
import WeWorkWith from "../components/WeWorkWith/WeWorkWith";
import StudentsSlide from "../components/StudentsSlide/StudentsSlide";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function CoursesAbout() {
  return <div>
    <Header/>
    <OnlineCourses/>
    <Nullam/>
    <CoreValues/>
    <OurTeachers/>
    <WeWorkWith/>
    <StudentsSlide/>
    <LatestPosts/>
    <Newsletter/>
    <Footer/>
  </div>;
}

export default CoursesAbout;
