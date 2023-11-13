import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../Ui";
const LecturExam = () => {
  const { id } = useParams();
  return (
    <div>
      <Container
        style={{ padding: "20px", marginBottom: "50px", direction: "rtl" }}
        className="container-card"
      >
        <div>
          <h2> السؤال الاول : </h2>
        </div>

        <div style={{ margin: "10px" }}>
          <h3> ماهى عاصمة فلسطين ؟</h3>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <input type="radio" value="القدس " />
            <h6 style={{ margin: "5px" }}> القدس</h6>
          </div>
          <div style={{ display: "flex" }}>
            <input type="radio" value="القدس " />
            <h6 style={{ margin: "5px" }}> القدس</h6>
          </div>
          <div style={{ display: "flex" }}>
            <input type="radio" value="القدس " />
            <h6 style={{ margin: "5px" }}> القدس</h6>
          </div>
          <div style={{ display: "flex" }}>
            <input type="radio" value="القدس " />
            <h6 style={{ margin: "5px" }}> القدس</h6>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Button> السابق </Button>
          <Button> التالى </Button>
        </div>
      </Container>
    </div>
  );
};

export default LecturExam;
