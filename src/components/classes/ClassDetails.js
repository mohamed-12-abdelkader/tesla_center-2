import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../Api/baseURL";
import SectionOne from "../Home/SectionOne";
import Spinner from "react-bootstrap/Spinner";
import img from "../../imgs/book.png";
import img2 from "../../imgs/man.jfif";
import subjectsWithTeachers from "../../Api/Teacher";
import { Container } from "react-bootstrap";
import ScrollToTop from "../Scroll/ScrollToTop";
import { CardComponent, Description } from "../Ui";
import { Slide, Zoom } from "react-awesome-reveal";

const ClassDetails = () => {
  const { id } = useParams(); // الحصول على معرف الصف من المسار
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    baseUrl
      .get(`/api/v1/grades/${id}`)
      .then((response) => {
        if (response.data.data && response.data.data.length > 0) {
          setClassDetails(response.data.data[0].attributes);
        }
      })
      .catch((error) => {
        console.error("حدث خطأ في الاستدعاء: ", error);
      });
  }, [id]); // تأكد من إعادة الاستدعاء عند تغيير المعرف

  return (
    <>
      <div>
        {classDetails ? (
          <>
            <SectionOne name={classDetails.name} img={img} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>{classDetails.name}</h3>
            </div>
            <Description />
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
                <h2 style={{ color: "white", fontWeight: "bold" }}>
                  مدرسين :{" "}
                  <span style={{ color: "red" }}>{classDetails.name}</span>
                </h2>
              </div>
              <Container className="card-2">
                {subjectsWithTeachers.map((subject, index) => (
                  <Container
                    style={{ direction: "rtl", padding: "20px 0" }}
                    key={index}
                  >
                    <h3 style={{}}>{subject.subject} :</h3>
                    <div
                      className="teacher-container"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {subject.teachers.map((teacher, idx) => (
                        <Slide>
                          <CardComponent
                            key={teacher.id}
                            href={`/teachers/${teacher.id}`}
                            title={teacher.name}
                            img={img2}
                          />
                        </Slide>
                      ))}
                    </div>
                  </Container>
                ))}
              </Container>
            </div>
          </>
        ) : (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
      <ScrollToTop />
    </>
  );
};

export default ClassDetails;
