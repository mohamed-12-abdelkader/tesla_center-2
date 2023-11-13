import React from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import ModalVideo from "react-modal-video";
import SectionOne from "../Home/SectionOne";
import img from "../../imgs/images.jfif";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../Scroll/ScrollToTop";
const Lecture = () => {
  const { id } = useParams();
  const data = [
    {
      type: "video",
      id: 1,
      name: " شرح الدرس الاول الجزء الاول ",
      videoId: "abc123",
    },
    {
      type: "video",
      id: 2,
      name: "شرح الدرس الاول الجزء الثانى ",
      videoId: "def456",
    },
    {
      type: "video",
      id: 3,
      name: "حل تمارين الدرس الاول ",
      videoId: "ghi789",
    },
    {
      type: "exam",
      id: 101,
      name: "امتحان على الدرس الاول ",
    },
  ];
  return (
    <div>
      <SectionOne name="الدرس الاول الباب التانى " img={img} />

      <Container style={{ direction: "rtl", margin: "50px 0" }}>
        <Row>
          <Col className="Month-details" lg={7}>
            <Card style={{ direction: "rtl", marginTop: "50px " }} className="">
              <div className="p-4">
                <h1>
                  تفاصيل <span style={{ color: "red" }}> المحاضرة : </span>
                </h1>
                <div
                  className="my-3"
                  style={{
                    height: "2px",
                    backgroundColor: "#227dbd",
                    width: "280px",
                  }}
                ></div>
                <h5 className="w-75">
                  محتوى الكورس: 10/1 المحاضره الرابعه الباب الاول ( قواعد توزيع
                  الالكترونات ) 10/8 مراجعه عامه على الباب الاول 10/15 المحاضره
                  الاولى باب ثانى (الجدول الدورى الحديث ) 10/22 المحاضره الثانيه
                  باب ثانى ( تدرج الخواص فى الجدول الدورى حتى ما قبل خاصيه جهد
                  التأين ) الامتحان الشامل يومين 11و 12 اكتوبر
                </h5>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Outlet />
      </Container>
      <Container
        className="container-card"
        style={{ marginBottom: "50px", padding: "20px", direction: "rtl" }}
      >
        <h1>
          تفاصيل <span style={{ color: "red" }}> المحاضرة : </span>
        </h1>

        <div
          className="my-3"
          style={{
            height: "2px",
            backgroundColor: "#227dbd",
            width: "280px",
          }}
        ></div>

        {data.map((item) => {
          return (
            <Card
              className="card-lectur"
              style={{ margin: "20px 0", padding: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  direction: "rtl",
                }}
              >
                <h3>{item.name}</h3>
                <Link
                  to={
                    item.type === "video"
                      ? `video/${item.id} `
                      : `exam/${item.id}`
                  }
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor:
                        item.type === "video" ? "#0079d9" : "rgb(80, 221, 80)",
                    }}
                  >
                    {item.type === "video" ? "شاهد الفيديو" : "ابداء الامتحان"}
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </Container>

      <ScrollToTop />
    </div>
  );
};

export default Lecture;
