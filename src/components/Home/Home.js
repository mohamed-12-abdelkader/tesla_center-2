import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThre from "./SectionThre";
import SectionFour from "./SectionFour";

import ScrollToTop from "../Scroll/ScrollToTop";
const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThre />

      <SectionFour />
      <ScrollToTop />
    </div>
  );
};

export default Home;
