import styled from "styled-components";

import MainNavBar from "../components/Main/MainNavBar";
import MainMenu from "../components/Main/MainMenu";
import EventSection from "../components/Main/EventSection";
import ContentSection from "../components/Main/ContentSection";
import MainContent from "../components/Main/MainContent";

const MainPage = () => {
  return (
    <Div>
      <MainNavBar />
      <MainMenu />
      <EventSection />
      <MainContent />
    </Div>
  );
};

export default MainPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
