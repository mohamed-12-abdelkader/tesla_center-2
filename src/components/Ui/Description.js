import React from "react";
import { Container } from "react-bootstrap";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import RepeatIcon from "@mui/icons-material/Repeat";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Slide, Zoom } from "react-awesome-reveal";
function Description() {
  return (
    <Container>
      <div
        className="description"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div className="icon-div">
          <Slide>
            <div
              className="icon  image-with-animation"
              style={{ backgroundColor: "#227dbd" }}
            >
              <AccessAlarmIcon
                style={{
                  position: "relative",
                  fontSize: "150px",
                  color: "white",
                  top: "13%",
                  left: "14%",
                }}
              />
            </div>
          </Slide>
          <Zoom>
            <h5 className="font" style={{ backgroundColor: "#227dbd" }}>
              وفر وقتك
            </h5>
          </Zoom>
        </div>
        <div className="icon-div">
          <Slide>
            <div
              className="icon image-with-animation"
              style={{ backgroundColor: "#474cb9" }}
            >
              <RepeatIcon
                style={{
                  position: "relative",
                  fontSize: "150px",
                  color: "white",
                  top: "13%",
                  left: "14%",
                }}
              />
            </div>
          </Slide>
          <Zoom>
            <h5 className="font" style={{ backgroundColor: "#474cb9" }}>
              شاهد دروسك اكثر من مرة
            </h5>
          </Zoom>
        </div>
        <div className="icon-div">
          <Slide>
            <div
              className="icon image-with-animation"
              style={{ backgroundColor: "#2c6fbb" }}
            >
              <AutoStoriesIcon
                style={{
                  position: "relative",
                  fontSize: "150px",
                  color: "white",
                  top: "13%",
                  left: "14%",
                }}
              />
            </div>
          </Slide>
          <Zoom>
            <h5 className="font" style={{ backgroundColor: "#2c6fbb" }}>
              امتحانات دورية و مستمرة
            </h5>
          </Zoom>
        </div>
      </div>
    </Container>
  );
}

export default Description;
