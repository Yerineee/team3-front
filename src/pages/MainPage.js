import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MainNavBar from "../components/Main/MainNavBar";
import MainMenu from "../components/Main/MainMenu";
import EventSection from "../components/Main/EventSection";
import MainContent from "../components/Main/MainContent";
import SubContent from "../components/Main/SubContent";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const { pathname } = useLocation();
  let component;
  switch (pathname) {
    case "/main":
      component = <MainContent />;
      break;
    case "/main/novels":
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
      {component}
      <Footer />
    </Div>
  );
};
export default MainPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
