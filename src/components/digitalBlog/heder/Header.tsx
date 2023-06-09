import React from "react";
import HeaderDig from "./HeaderDig";

const Blog: React.FC = () => {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/blog/course", label: "The Complete Digital Marketing Course - 12 Courses in 1" },
  ];

  return (
    <div>
      <HeaderDig items={breadcrumbItems} />
      {/* Rest of the blog content */}
    </div>
  );
};

export default Blog
