import styled from "styled-components";

const HashtagList = ({ hashtags }) => {
  return (
    <ListWrapper>
      {hashtags &&
        hashtags.map(hashtag => {
          return <Hashtag key={hashtag}>#{hashtag}</Hashtag>;
        })}
    </ListWrapper>
  );
};

export default HashtagList;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 148px;
  height: 88px;
  margin: 40px 0px 30px 20px;
`;

const Hashtag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  font-family: "Noto Sans KR Regular";
  font-size: 13px;

  height: 24px;
  padding: 0px 7px;

  border: 1px solid #000;
  border-radius: 30px;
`;
