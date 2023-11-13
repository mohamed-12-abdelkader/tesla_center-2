import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import img from "../../imgs/book.png";
import { Container, Row, Col } from "react-bootstrap";

const SectionThre = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col lg={6} md={12}>
          <Zoom>
            <img src={img} className="img-fluid" alt="Books" />
          </Zoom>
        </Col>

        <Col lg={6} md={12} className="d-flex align-items-center">
          <div>
            <h3 className="text-center">ماذا نقدم للطالب @</h3>
            <Slide>
              <Container>
                <h6 style={{ marginTop: "50px", direction: "rtl" }}>
                  توفر المنصة للطالب تجربة فريدة وسهلة وآمنة للتعلم عن بعد، حيث
                  سيتمكن الطالب من اختيار مدرس المادة من بين مجموعة من أفضل
                  المدرسين الأكفاء في جميع المواد الدراسية
                </h6>
              </Container>
              <ul style={{ marginTop: "100px", direction: "rtl" }}>
                <li>تجربة أمنة</li>
                <li>تغطية المناهج الدراسية</li>
                <li>امتحانات دورية مستمرة</li>
                <li>جودة عالية في الشرح مع أكفاء المدرسين</li>
              </ul>
            </Slide>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionThre;
