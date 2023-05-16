import { useState, useEffect } from "react";
import styled from "styled-components";

// components
import DetailNavBar from "../components/Detail/DetailNavBar";
import HashtagList from "../components/Detail/HashtagList";

// 커버 이미지 임의로 넣어두었습니다.
const DetailPage = () => {
  const [hashtags, setHashtags] = useState([]); // 작품의 해시태그

  // 해시태그는 임의로 설정했습니다.
  useEffect(() => {
    setHashtags(["로맨틱코미디", "일상로맨스", "독점", "계약관계", "223만"]);
  }, []);

  return (
    <Div>
      <CoverBackground />
      <DetailNavBar />

      <CoverImg
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjZfMTMz%2FMDAxNjQ1ODc3MjcyNzAw.hJIuZtpsiJVEsMtKqmZ1Kumr_T9igZ91lcNBWxtQl24g.bp28jqJSADyzgk_Yc5IbNM7cfftmddjFZBKqQRRMT_4g.JPEG.dlswn1007%2F%25BB%25E7%25B6%25FB%25C0%25C7-%25BB%25F5%25BD%25CF%25BE%25E0%25B1%25B9%2528%25BC%25F6%25C1%25A4%2529.jpg&type=sc960_832"
        alt="커버 이미지"
      />
      <HashtagList hashtags={hashtags} />
    </Div>
  );
};

export default DetailPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

// 배경 색상은 임의로 설정했습니다.
const CoverBackground = styled.div`
  position: relative;

  background-color: #c6eb91;
  width: 100%;
  height: 210px;
  z-index: -1;
`;

// 작품의 커버 이미지
const CoverImg = styled.img`
  position: absolute;
  left: 40px;
  top: 64px;

  width: 146px;
  height: 208px;

  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
