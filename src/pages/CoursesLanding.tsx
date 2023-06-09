import React from "react";
import Header from "../components/header/Header";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import Hero from "../components/Hero/Hero";
import InterComp from "../components/interComp/InterComp";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import OurTeachers from "../components/ourTeachers/OurTeachers";
import WeWorkWith from "../components/WeWorkWith/WeWorkWith";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import StudentsSlide from "../components/StudentsSlide/StudentsSlide";
import FeaturedCourses from "../components/FeaturedCourses/FeaturedCourses";

function CoursesLanding() {
  return (
    <div>
      <Header />
      <Hero/>
      <WeWorkWith/>
      <DownloadApp/>
      <InterComp/>
      <FeaturedCourses/>
      <FeaturedCategory/>
      <OurTeachers/>
      <StudentsSlide/>
      <LatestPosts/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default CoursesLanding;
