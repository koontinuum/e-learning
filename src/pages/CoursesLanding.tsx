import React from "react";
import Header from "../components/header/Header";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import Hero from "../components/Hero/Hero";
import InterComp from "../components/interComp/InterComp";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function CoursesLanding() {
  return (
    <div>
      <Header />
      <Hero/>
      <FeaturedCategory/>
      {/* <InterComp/> */}
      <LatestPosts/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default CoursesLanding;
