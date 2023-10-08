import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import img from "../../imgs/new-droosy.png";
const SectionOne = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div style={{ height: "600px", background: "#0079d9" }}>
          <div className="container  d-flex justify-content-between">
            <div className="flex-fill ">
              <div className="container tesla" style={{ marginTop: "120px" }}>
                <Slide>
                  <h1>Tesla Center Online</h1>
                  <p style={{ marginTop: "30px", color: "white" }}>
                    Tesla Center <br />
                    هى منصة تعليمية تهدف لتطوير التعليم <br />
                    والنهوض بمستوى الطالب عن طريق <br />
                    احدث الادوات وافضل الاساليب{" "}
                  </p>
                </Slide>
              </div>
            </div>

            <div className="flex-fill">
              <Zoom>
                <img src={img} />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
