import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursesLanding from "./pages/CoursesLanding";
import CoursesList from "./pages/CoursesList";
import CoursesDetails from "./pages/CoursesDetails";
import CoursesBlog from "./pages/CoursesBlog";
import CoursesBlogDetails from "./pages/CoursesBlogDetails";
import CoursesAbout from "./pages/CoursesAbout";
import CoursesContact from "./pages/CoursesContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoursesLanding />} />
          <Route path="/Courses-List" element={<CoursesList />} />
          <Route path="/Courses-Details" element={<CoursesDetails />} />
          <Route path="/Courses-Blog" element={<CoursesBlog />} />
          <Route
            path="/Courses-Blog-Details"
            element={<CoursesBlogDetails />}
          />
          <Route path="/Courses-About" element={<CoursesAbout />} />
          <Route path="/Courses-Contact" element={<CoursesContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
