import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThre from "./SectionThre";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import ClassesList from "../classes/ClassesList";
import ScrollToTop from "../Scroll/ScrollToTop";
const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThre />

      <SectionFour />
      <ClassesList />
      <ScrollToTop />
    </div>
  );
};

export default Home;
