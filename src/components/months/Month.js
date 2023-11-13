import React from "react";
import SectionOne from "../Home/SectionOne";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../../imgs/book.png";
import { Button, CardComponent, Modal } from "../Ui";
import Lecture from "../lectures/Lecture";
import img1 from "../../imges/1692106150_S8JECr.jpg";
import img2 from "../../imges/1692740769_xzx8Bq.jpg";
import img3 from "../../imges/1693344063_mxddAL.jpg";
import img4 from "../../imges/1693966204_zBTGIF.jpg";
import img5 from "../../imges/1694561935_UVRIcu.jpg";
import img6 from "../../imges/1695143032_BnnHGj.jpg";
import img7 from "../../imges/1695787704_szdIm0.jpg";
import img8 from "../../imges/1695809500_TLAMPW.png";
import { useUserContext } from "../../context/Context";
import ScrollToTop from "../Scroll/ScrollToTop";
const Month = () => {
  const { openModel, handleCloseModel, handleClickOpen } = useUserContext();
  const lectures = [
    {
      id: Math.random(),
      title: "المحاضرة الاولى ",
      img: img1,
    },
    {
      id: Math.random(),
      title: "المحاضرة الثانية ",
      img: img2,
    },
    {
      id: Math.random(),
      title: "المحاضرة الثالثة ",
      img: img3,
    },
    {
      id: Math.random(),
      title: "المحاضرة الرابعة ",
      img: img4,
    },
    {
      id: Math.random(),
      title: "المحاضرة الخامسة ",
      img: img5,
    },
    {
      id: Math.random(),
      title: "المحاضرة السادسة ",
      img: img6,
    },
    {
      id: Math.random(),
      title: "المحاضرة السابعة ",
      img: img7,
    },
    {
      id: Math.random(),
      title: "المحاضرة الثامنة ",
      img: img8,
    },
  ];

  return (
    <div>
      <SectionOne name="شهر يناير " img={img} />
      <Container style={{ direction: "rtl" }}>
        <Row className="justify-content-between">
          <Col className="Month-details" lg={7}>
            <Card style={{ direction: "rtl", marginTop: "50px " }} className="">
              <div className="p-4">
                <h1>
                  تفاصيل <span style={{ color: "red" }}>شهر يناير : </span>
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
          <Col className="Subscribe-card" lg={4}>
            <Card style={{ marginTop: "50px" }} className="">
              <Card.Img variant="top" src={img} style={{ height: "60%" }} />
              <Card.Body className="d-flex flex-column justify-content-end">
                <Button onClick={handleClickOpen}> اشترك الان !</Button>
              </Card.Body>
            </Card>
            <Modal openModel={openModel} handleCloseModel={handleCloseModel} />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ direction: "rtl", padding: "20px", marginTop: "50px" }}
        className=" container-card my-5"
      >
        <div style={{ marginTop: "20px" }} className="text-right m-3">
          <h1 style={{ fontWeight: "bold" }}>
            محتوى <span style={{ color: "#227dbd" }}> الشهر : </span>
          </h1>
          <div
            className="my-3"
            style={{
              height: "2px",
              backgroundColor: "#227dbd",
              width: "250px",
            }}
          ></div>
        </div>
        <Row className="justify-content-center">
          {lectures.map((lecture) => (
            <Col
              style={{ width: "auto" }}
              md={4}
              className="mb-4"
              key={lecture.id}
            >
              <CardComponent
                img={lecture.img}
                href={`/lectur/${lecture.id}`}
                title={lecture.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  );
};

export default Month;
