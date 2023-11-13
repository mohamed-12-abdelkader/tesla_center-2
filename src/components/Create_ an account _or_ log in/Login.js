import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import img from "../../imgs/download.png";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../Scroll/ScrollToTop";
const Login = () => {
  return (
    <>
      <Container style={{ marginTop: "100px", direction: "" }}>
        <Row>
          <Col lg={6} md={12}>
            <h3 style={{ direction: "rtl" }}>
              تسجيل <span style={{ color: "red" }}> الدخول:</span>
            </h3>
            <form style={{ display: "grid", margin: "50px" }}>
              <TextField
                style={{ margin: "10px 0" }}
                id="filled-basic"
                label={
                  <div>
                    <AlternateEmailIcon style={{ color: "#0079d9" }} />
                    email
                  </div>
                }
                variant="filled"
              />

              <TextField
                style={{ margin: "10px 0" }}
                id="filled-basic"
                type="password"
                label={
                  <div>
                    <LockIcon style={{ color: "#0079d9" }} />
                    password
                  </div>
                }
                variant="filled"
              />

              <Button>تسجيل الدخول</Button>
              <h5 style={{ direction: "rtl", marginTop: "30px" }}>
                {" "}
                لا يوجد لديك حساب ؟{" "}
                <Link
                  to="/createAccount"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  {" "}
                  انشئ حسابك الان!{" "}
                </Link>
              </h5>
            </form>
          </Col>
          <Col lg={6} md={12} className="text-center">
            <img style={{ width: "100%" }} src={img} alt="Image" />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </>
  );
};

export default Login;
