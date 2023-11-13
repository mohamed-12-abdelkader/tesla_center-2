import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Video from "../../imgs/tesla center - Google Chrome 2023-11-05 08-02-22.mp4";
const LecturVideo = () => {
  const { id } = useParams();
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
              <video
                  className="video"
          style={{
            boxShadow:
              "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3)",
          }}
          width="80%"
          height="500px"
          controls
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};

export default LecturVideo;
