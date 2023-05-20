import React from "react";
import styled from "styled-components";
import ContentSlide from "./ContentSlide";
import arrow from "../../assets/icon/Main/arrow.png";

const ContentSection = ({ topicTitle, contentData, sort }) => {
  return (
    <div>
      <ContentContainer>
        <TopicTitle>{topicTitle}</TopicTitle>
        <MoreIcon src={arrow} />
      </ContentContainer>
      <ContentSlide contents={contentData} sort={sort} />
    </div>
  );
};

export default ContentSection;

const TopicTitle = styled.p`
  padding: 0 114.83px 0px 14px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  /* 시리즈 메인 컬러 */

  color: #00dc64;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-right: 15px;
  margin-bottom: 10px;
`;

const MoreIcon = styled.img`
  width: 7.81px;
  height: 10.01px;
`;
