import styled from "styled-components";

const MainMenu = () => {
  const SectionItem = ["NOVEL", "COMIX", "시리즈 에디션", "보관함"];

  return (
    <>
      {SectionItem.map(item => {
        return <Section key={item}>{item}</Section>;
      })}
    </>
  );
};

export default MainMenu;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 165px 15px 164px;
  gap: 10px;

  height: 32px;

  background: #00dc64;

  border-width: 1.5px 0px;
  border-style: solid;
  border-color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
