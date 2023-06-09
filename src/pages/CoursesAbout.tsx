
import React from 'react';
import Header from '../components/header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Teachers from '../components/teachers/Teachers';

const CoursesAbout = () => {
  return (
    <div>
      <Header/>
      <Newsletter/>
      <Teachers/>
    </div>
  );
};

import React from "react";
import Header from "../components/header/Header";
import OnlineCourses from "../components/OnlineCourses/OnlineCourses";
import Nullam from "../components/Nullam/Nullam";

function CoursesAbout() {
  return <div>
    <Header/>
    <OnlineCourses/>
    <Nullam/>
  </div>;
}


export default CoursesAbout;
