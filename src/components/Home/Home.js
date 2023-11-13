import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThre from "./SectionThre";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import ClassesList from "../classes/ClassesList";
import ScrollToTop from "../Scroll/ScrollToTop";
import { useUserContext } from "../../context/Context";
const Home = () => {
  const { showSignupPage } = useUserContext();
  return (
    <div>
      <SectionOne
        name="Tesla Center"
        description=" هى منصة تعليمية تهدف لتطوير نظام التعليم والنهوض بمستوى الطالب عن طريق احدث الادوات وافضل الاساليب "
      />
      <SectionTwo />
      <SectionThre />
      {showSignupPage ? <ClassesList /> : <SectionFour />}

      <ScrollToTop />
    </div>
  );
};

export default Home;
