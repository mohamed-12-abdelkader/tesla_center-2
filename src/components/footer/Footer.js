import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div
      style={{
        height: "250px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0079d9",
      }}
    >
      <div>
        <div style={{ display: "flex" }}>
          💗
          <h1
            className="footer"
            style={{ fontSize: "20px", color: "white", margin: "0 15px" }}
          >
            تم صنع هذة المنصة بهدف تهيئة الطالب لجميع جوانب الثانوية العامة وما
            بعدها
          </h1>
          💗
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div>
            <a href="#" style={{ margin: "10px" }}>
              <YouTubeIcon style={{ fontSize: "50px", color: "red" }} />
            </a>
            <a href="#" style={{ margin: "10px" }}>
              <FacebookIcon style={{ fontSize: "40px", color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
