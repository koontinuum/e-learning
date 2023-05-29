import React from "react";
import Header from "../components/header/Header";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import Hero from "../components/Hero/Hero";
import InterComp from "../components/interComp/InterComp";
import OurTeachers from "../components/ourTeachers/OurTeachers";
import WeWorkWith from "../components/WeWorkWith/WeWorkWith";
import StudentsSlide from "../components/StudentsSlide/StudentsSlide";

function CoursesLanding() {
  return (
    <div>
      <Header />
      <OurTeachers />
      <StudentsSlide />
      <InterComp />
      <Hero />
      <WeWorkWith />
      <FeaturedCategory />
      <InterComp />
    </div>
  );
}

export default CoursesLanding;
