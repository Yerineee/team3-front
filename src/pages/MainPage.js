import styled from "styled-components";

import MainNavBar from "../components/Main/MainNavBar";
import MainMenu from "../components/Main/MainMenu";
import EventSection from "../components/Main/EventSection";

const MainPage = () => {
  return (
    <Div>
      <MainNavBar />
      <MainMenu />
      <EventSection />
    </Div>
  );
};

export default MainPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
