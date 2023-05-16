import styled from "styled-components";

import MainNavBar from "../components/Main/MainNavBar";
import MainMenu from "../components/Main/MainMenu";

const MainPage = () => {
  return (
    <Div>
      <MainNavBar />
      <MainMenu />    
      <div>메인 페이지</div>
    </Div>
  );
};

export default MainPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
