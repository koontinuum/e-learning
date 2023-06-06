import React, { useRef, useCallback, useMemo, useState, useEffect } from "react";
import Header from "../components/header/Header";
import scss from "./CoursesList.module.scss";
import search from "../images/search/search.svg";
import closeIcon from "../images/search/closeIcon.svg";
import options from "../constants/options";
import img3 from "../images/stars/Ratings.svg";
import CoursesCardArr from "../constants/CoursesCardArr";
import CoursesCard from "../components/coursesCard/CoursesCard";
import { debounce } from "lodash";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Pagination from "../components/pagination/Pagination";
interface Course {
  spec: string;
}
interface Star {
  img: string;
  img1: string;
  img2: string;
}
interface StarsProps {
  stars: Star[];
}
const CoursesList: React.FC<StarsProps> = ({ stars }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [value, setValue] = useState<string | undefined>(undefined);
  const [courses, setCourses] = useState<Course[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const onClickClear = () => {
    setSearchText("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setSearchText(str);
    }, 200),
    []
  );
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const lowercaseValue = e.target.value.toLowerCase();
    setValue(lowercaseValue);
    updateSearchValue(lowercaseValue);
    setSearchText(lowercaseValue);
  }
  useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    const response = await axios.get("https://645d1724250a246ae317581b.mockapi.io/zone?page=1&limit=8&");
    setCourses(response.data);
    console.log(response.data);
  };
  // const filteredCourses = useMemo(
  //   () =>
  //     CoursesCardArr.filter((course) =>
  //       course.spec.toLowerCase().includes(searchText)
  //     ),
  //   [searchText]
  // );
  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        course.spec.toLowerCase().includes(searchText)
      ),
    [courses, searchText]
  );
  
    
  const renderCoursesCard = useMemo(
    () =>
      filteredCourses.map((item) => <CoursesCard  foto={""} cena={""} courses={""} text={""} star={""} teacher={""} time={""} {...item}  />),
    [filteredCourses]
  );
  
  const [starStates, setStarStates] = useState<boolean[][]>(
    Array(stars.length)
      .fill(false)
      .map(() => Array(5).fill(false))
  );
  const handleClick = (rowIndex: number, starIndex: number) => {
    const newStarStates = [...starStates];
    newStarStates[rowIndex][starIndex] = !newStarStates[rowIndex][starIndex];
    setStarStates(newStarStates);
  };
  function setcurrentPage(number: number): void {
  
 
    console.log("Current Page:", number);
    }

  return (
    <div className={scss.wrap}>
      <Header />
      <div className={scss.wrap_cont}>
        <div className={scss.wrap__main}>
          <h2>{t("teachers.h3")}</h2>
          <div className={scss.main__wrappinput}>
            <img src={search} className={scss.main__icon} alt="search" />
            {searchText && (
              <img
                src={closeIcon}
                className={scss.main__closeIcon}
                alt="Close Icon"
                onClick={onClickClear}
              />
            )}
            <input
              className={scss.main__inp}
              value={searchText}
              ref={inputRef}
              placeholder="Search"
              onChange={onChangeInput}
            />
          </div>
          <div>
            <img src={img3} alt="star" />
          </div>
          <div>
            {stars.map((star, rowIndex) => (
              <div className={scss.main__stars} key={rowIndex}>
                {starStates[rowIndex].map((isActive, starIndex) => (
                  <img
                    key={starIndex}
                    src={isActive ? star.img1 : star.img}
                    alt="star"
                    onClick={() => handleClick(rowIndex, starIndex)}
                  />
                ))}
                <div className={scss.stars__embl}>
                  <img src={star.img2} alt="star" />
                </div>
              </div>
            ))}
          </div>
          {options.map((option, title) => (
            <>
              <h5>{option.title}</h5>
              <select className={scss.main__select} title={option.label}>
                <option>{option.label}</option>
                <option>{option.value}</option>
                <option>{option.value1}</option>
              </select>
            </>
          ))}
        </div>
        <div className={scss.cont__coursesCard}>{renderCoursesCard}</div>
      </div>
      <Pagination onChange={(number: number) => setcurrentPage(number)} />
    </div>
  );
};
export default CoursesList;
