import React from "react";
import MyCard from "react-bootstrap/Card"; // قم باستيراد مكون Card من react-bootstrap وقم بإعطائه اسمًا مختلفًا
import Button from "./Button";
import { Link } from "react-router-dom";
const CardComponent = ({ img, title, href }) => {
  return (
    <Link to={href} style={{ color: "white" }}>
      <MyCard
        style={{
          width: "16rem",
          margin: "20px 20px",
          textAlign: "center",
        }}
      >
        <MyCard.Img style={{ height: "300px" }} src={img} />
        <Button> {title}</Button>
      </MyCard>
    </Link>
  );
};

export default CardComponent;
