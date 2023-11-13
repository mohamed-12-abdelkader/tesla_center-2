import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/Context";
const CardCourse = ({ Month, href }) => {
  const { openModel, handleCloseModel, handleClickOpen } = useUserContext();
  return (
    <>
      <Card className="card-courses" style={{ width: "20rem", margin: "30px 10px" }}>
        <Card.Body>
          <h3>
            شهر <span style={{ color: "red" }}>{Month}</span>{" "}
          </h3>
          <p
            style={{ width: "100%", height: "2px", backgroundColor: "#227dbd" }}
          ></p>
          <h4 style={{ color: "rgb(72, 68, 68)" }}>
            لو بتقابلك صعوبة في الاشتراك او للاشتراك بفودافون كاش ابعت رساله
            لتيم الدعم الفني علي التليجرام علي الرقم 01030419304 او كلمنا على
            هوت لاين 16410
          </h4>
          <p
            style={{ width: "100%", height: "2px", backgroundColor: "#227dbd" }}
          ></p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={handleClickOpen}
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              اشترك الان !
            </Button>
            <Link to={href}>
              <Button
                style={{ borderRadius: "50px" }}
                variant="outline-success"
              >
                الدخول للكورس
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
      <Modal openModel={openModel} handleCloseModel={handleCloseModel} />
    </>
  );
};

export default CardCourse;
