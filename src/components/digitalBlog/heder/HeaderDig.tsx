import React from "react";
import { Link } from "react-router-dom";
import scss from "./HeaderDig.module.scss";

interface HeaderDigItem {
  path: string;
  label: string;
}

interface HeaderDigProps {
  items: HeaderDigItem[];
}

const HeaderDig: React.FC<HeaderDigProps> = ({ items }) => {
  return (
    <div className={scss.wrapper}>
      <nav className={scss.navigation}>
        <ul className={scss.list}>
          {items.map((item, index) => (
            <li key={item.path} className={scss.item}>
              <Link to={item.path} className={item.label === "Home" ? scss.home : item.label === "Blog" ? scss.blog : ""}>
                {item.label}
              </Link>
              {index < items.length - 1 && " > "}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDig;
