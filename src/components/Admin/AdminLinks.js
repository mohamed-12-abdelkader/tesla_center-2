import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const AdminLinks = ({ currentLink, setCurrentLink }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const links = [
    {
      id: Math.random(),
      link: "ادارة المنصة ",
      path: "/admin/management",
    },
    {
      id: Math.random(),
      link: "اضافة مدرس جديد ",
      path: "/admin/addteacher",
    },
    {
      id: Math.random(),
      link: "اضافة شهر جديد ",
      path: "/admin/addmonth",
    },
    {
      id: Math.random(),
      link: "اضافة محاضرة جديدة ",
      path: "/admin/addlecture",
    },
    {
      id: Math.random(),
      link: "اضافة امتحان ",
      path: "/admin/addexam",
    },

    // ... العناصر الأخرى
  ];

  useEffect(() => {
    // تحديث اللينك النشط الأولي عند فتح الصفحة
    const initialActiveLink = links.find(
      (link) => link.path === location.pathname
    );
    if (initialActiveLink) {
      setActiveLink(initialActiveLink.path);
      setCurrentLink(initialActiveLink.path); // تحديث اللينك النشط عند فتح الصفحة
    }
  }, [location.pathname, links, setCurrentLink]);

  useEffect(() => {
    // تحديث اللينك النشط عندما يتغير currentLink
    setActiveLink(currentLink);
  }, [currentLink]);

  const handleClick = (link) => {
    // تحديث currentLink عند النقر على اللينك
    setCurrentLink(link.path);
  };

  return (
    <>
      <div className="links-container">
        {links.map((link) => (
          <NavLink key={link.id} to={link.path} activeClassName="active-link">
            <div
              onClick={() => handleClick(link)}
              style={{
                backgroundColor: activeLink === link.path ? "#3b82f6" : "white",
                color: activeLink === link.path ? "white" : "black",
                width: "250px",
              }}
            >
              <h5 className="font">{link.link}</h5>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default AdminLinks;
