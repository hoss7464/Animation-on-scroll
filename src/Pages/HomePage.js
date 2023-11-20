import React from "react";
import Navbar from "../Component/Navbar";
import Section1 from "../Component/Sections/Section1";
import Section2 from "../Component/Sections/Section2";
import Section3 from "../Component/Sections/Section3";
import Sidebar from "../Component/SideBar";
import { Section1Data } from "../Component/Data/Section1Data";
import { Section2Data } from "../Component/Data/Section2Data";
import { InfoData } from "../Component/Data/Section3Data";
import { InfoDataTwo } from "../Component/Data/Section3Data";
import GlobalStyle from "../Component/GlobalStyles/GlobalStyles";

function HomePage({ toggle, isOpen }) {
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Section1 slides={Section1Data} />
      <Section2 {...Section2Data} />
      <Section3 {...InfoData} {...InfoDataTwo} />
    </>
  );
}

export default HomePage;
