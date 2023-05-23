import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MainNavBar from "../components/Main/nav/MainNavBar";
import MainMenu from "../components/Main/menu/MainMenu";
import EventSection from "../components/Main/event/EventSection";
import MainContent from "../components/Main/content/MainContent";
import SubContent from "../components/Main/content/SubContent";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const { pathname } = useLocation();
  let component;
  switch (pathname) {
    case "/":
      component = <MainContent />;
      break;
    case "/novels":
      component = <SubContent />;
      break;
    default:
      component = null;
  }

  return (
    <Div>
      <MainNavBar />
      <MainMenu />
      <EventSection />
      <ComponentSection>{component}</ComponentSection>
      <Footer />
    </Div>
  );
};
export default MainPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const ComponentSection = styled.div`
  margin: 15px;
`;
