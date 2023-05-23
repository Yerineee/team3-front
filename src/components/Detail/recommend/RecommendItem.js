import styled from "styled-components";

const RecommentItem = ({ image, genre, title, downloadCount }) => {
  return (
    <ItemWrapper>
      <ItemImg src={image} />
      <ItemTitle>{title}</ItemTitle>
      <ItemInfo>
        {genre}·{downloadCount / 1000}만
      </ItemInfo>
    </ItemWrapper>
  );
};

export default RecommentItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 92px;
  height: 202px;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 136px;

  border-radius: 3px;
`;

const ItemTitle = styled.span`
  width: 100%;
  height: 38px;
  margin-top: 16px;

  font-family: "Noto Sans KR Regular";
  font-size: 12px;
  text-align: start;
`;

const ItemInfo = styled.span`
  width: 100%;
  height: 15px;
  margin-top: 8px;

  font-family: "Noto Sans KR Regular";
  font-size: 11px;
  color: #949494;
  text-align: start;
`;
