import React from "react";
import Header from "../components/header/Header";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import Hero from "../components/Hero/Hero";
import InterComp from "../components/interComp/InterComp";
import WeWorkWith from "../components/WeWorkWith/WeWorkWith";

function CoursesLanding() {
  return (
    <div>
      <Header />
      <Hero/>
      <WeWorkWith/>
      <FeaturedCategory/>
      <InterComp/>

    </div>
  );
}

export default CoursesLanding;
