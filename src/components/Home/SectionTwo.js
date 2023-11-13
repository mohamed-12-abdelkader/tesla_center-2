import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import img from "../../imgs/teacher-2.png";
import { Container, Row, Col } from "react-bootstrap";

const SectionTwo = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col lg={6} md={12}>
          <Zoom>
            <img
              src={img}
              style={{ width: "400px" }}
              className="img-fluid"
              alt="Books"
            />
          </Zoom>
        </Col>

        <Col lg={6} md={12} className="d-flex align-items-center">
          <div>
            <h3 className="text-center">ماذا نقدم للمدرس @</h3>
            <Slide>
              <ul style={{ marginTop: "100px", direction: "rtl" }}>
                <li>
                  إنشاء مجموعات دراسية جماعية للطلبة والتواصل المباشر معهم
                </li>
                <li>
                  الدعم الفني للحصص التعليمية قبل واثناء وبعد الحصة الدراسية.
                </li>
                <li>
                  توفر المنصة التدريب للمدرسين مما يطور من مهاراتهم للقيام
                  بعملية التعليم عن بعد.
                </li>
                <li>إدارة المنصة من الناحية التقنية وإدارة المحتوى.</li>
              </ul>
            </Slide>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
