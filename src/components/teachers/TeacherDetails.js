import React from "react";
import { useParams } from "react-router-dom";
import SectionOne from "../Home/SectionOne";
import img from "../../imgs/man.jfif";
import ScrollToTop from "../Scroll/ScrollToTop";
import { Container } from "react-bootstrap";
import { Slide, Zoom } from "react-awesome-reveal";

import { Description, Card, CardCourse } from "../Ui";
const monthes = [
  { id: Math.random(), name: "يناير" },
  { id: Math.random(), name: "فبراير" },
  { id: Math.random(), name: "مارس" },
  { id: Math.random(), name: "ابريل" },
];
const TeacherDetails = () => {
  const name = "Mohamed Ahmed";
  const { id } = useParams();
  return (
    <div>
      <SectionOne name={name} img={img} />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <h3>{name}</h3>
        </div>
        <Description />
      </Container>
      <div
        style={{
          margin: "50px 0",
          backgroundColor: "#227dbd",
          padding: "50px 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2 style={{ color: "white", fontWeight: "bold", direction: "rtl" }}>
            كورسات مستر :<span style={{ color: "red" }}>{name}</span>
          </h2>
        </div>
        <Container className="card-2">
          <Container style={{ direction: "rtl", padding: "20px 0" }}>
            <div
              className="teacher-container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Slide>
                {monthes.map((monthe) => {
                  return (
                    <CardCourse
                      key={monthe.id}
                      Month={monthe.name}
                      href={`/month/${monthe.id}`}
                    />
                  );
                })}
              </Slide>
            </div>
          </Container>
        </Container>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default TeacherDetails;
