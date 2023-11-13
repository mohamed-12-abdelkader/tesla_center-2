import React, { useState } from "react";
import { Button } from "../Ui";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useUserContext } from "../../context/Context";
function Header() {
  const {
    showSignupPage,

    handleClose,
    setOpen,
    open,

    openNot,
    setOpenNot,
  } = useUserContext();

  function showCardClick() {
    setOpen(true);
  }
  function showNotCard() {
    setOpenNot(true);
  }
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="font">Tesla Center </h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "end" }}>
          {showSignupPage ? (
            <div style={{ marginRight: "20px", display: "flex" }}>
              <CircleNotificationsIcon
                style={{ color: "#0079d9", margin: "5px", cursor: " pointer" }}
                onClick={showNotCard}
              />
              <AccountCircleIcon
                style={{ color: "#0079d9", margin: "5px", cursor: " pointer" }}
                onClick={showCardClick}
              />
            </div>
          ) : (
            <Form className="d-flex">
              <Link to="/login">
                <Button variant="outline-success m-2">تسجيل الدخول</Button>
              </Link>
              <Link to="/createAccount">
                <Button variant="outline-success m-2">انشاء حساب</Button>
              </Link>
            </Form>
          )}
        </Navbar.Collapse>
        {open ? (
          <div
            onClick={handleClose}
            className="card"
            style={{
              position: "absolute",
              right: "3%",
              padding: "10px",
              top: "95%",
              marginRight: "10px",
              width: "200px",
              backgroundColor: "#FFF",
              direction: "rtl",
              boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "grid" }}>
              <Link to="/profile/myprofaile" style={{ textDecoration: "none" }}>
                <span
                  className="link"
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: "flex",
                    width: "90%",
                  }}
                >
                  {" "}
                  <h6 style={{ margin: "5px" }}> اهلا:mohamed</h6>
                </span>
              </Link>
              <span
                className="font profile"
                style={{
                  fontWeight: "bold",
                  margin: " 10px",
                  fontSize: "20px",
                }}
              >
                <Link
                  className="link"
                  to="/profile/myprofaile"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <AccountCircleIcon />
                  <h5 style={{ color: "rgb(72, 68, 68)" }}>حسابى </h5>
                </Link>
                <Link
                  className="link"
                  to="/"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <HomeIcon />
                  <h6 style={{ color: "rgb(72, 68, 68)" }}>
                    {" "}
                    الصفحة الرئيسية{" "}
                  </h6>
                </Link>
              </span>
              <span>
                <h5
                  className="link"
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                >
                  <LogoutIcon style={{ direction: "rtl" }} />
                  <a style={{ marginRight: "10px" }}>تسجيل الخروج</a>
                </h5>
              </span>
            </div>
          </div>
        ) : null}

        {openNot ? (
          <div
            className="card"
            style={{
              position: "absolute",
              right: "8%",
              padding: "10px",
              top: "95%",
              marginRight: "10px",
              width: "200px",
              backgroundColor: "#FFF",
              direction: "rtl",
              boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
              height: "40px",
            }}
          >
            <h5> لا يوجد اشعارات ....</h5>
          </div>
        ) : null}
      </Container>
    </Navbar>
  );
}

export default Header;
