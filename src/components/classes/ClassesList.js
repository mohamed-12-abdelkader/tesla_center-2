import React from "react";
import { CardComponent } from "../Ui";
import { Link } from "react-router-dom"; // استيراد Link من React Router
import { useUserContext } from "../../context/Context";
import { Container } from "react-bootstrap";

const ClassesList = () => {
  const { classes } = useUserContext();

  return (
    <Container style={{ marginTop: "50px" }}>
      <div>
        <div style={{ textAlign: "center" }}>
          <h2> الصفوف الدراسية </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            direction: "rtl",
          }}
        >
          {classes.map((classItem) => (
            <CardComponent
              key={classItem.id}
              href={`/class/${classItem.id}`}
              title={classItem.name}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ClassesList;
