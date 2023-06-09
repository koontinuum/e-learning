import React from "react";
import Header from "../components/header/Header";
import Details from "../components/Details/Details";
import Lessons from "../components/Lessons/Lessons";
import Reviews from "../components/Reviews/Reviews";
import SimilarCourses from "../components/SimilarCourses/SimilarCourses";

function CoursesDetails() {
  return <div>
    <Header/>
    <Details/>
    <Lessons/>
    <Reviews/>
    <SimilarCourses/>
  </div>;
}

export default CoursesDetails;
