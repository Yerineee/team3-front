import React from "react";
import styled from "styled-components";
import ContentSection from "./ContentSection";

const MainContent = () => {
  return (
    <Div>
      <TopicTitle>실시간 랭킹</TopicTitle>
      <ContentSection topicTitle={"NOVEL"} />
    </Div>
  );
};

export default MainContent;

const Div = styled.div``;

const TopicTitle = styled.p`
  padding: 0 114.83px 10px 16px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
