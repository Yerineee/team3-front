import React from "react";
import styled from "styled-components";
import ContentSlide from "./ContentSlide";
import arrow from "../../../assets/icon/Main/arrow.png";

const ContentSection = ({ topicTitle, contentData, sort, arrowCheck }) => {
  return (
    <div>
      <ContentContainer>
        {topicTitle && <TopicTitle>{topicTitle}</TopicTitle>}
        {arrowCheck && <MoreIcon src={arrow} topicTitle={topicTitle} />}
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
  position: relative

  padding-right: 15px;
  margin-bottom: 20px;
`;

const MoreIcon = styled.img`
  position: absolute;
  right: 0; /* 오른쪽 정렬 */
  margin-top: ${props =>
    props.topicTitle ? "5px" : "-24px"}; /* 상단 위치 조정 */
  margin-right: 35px;
  width: 7.81px;
  height: 10.01px;
`;
