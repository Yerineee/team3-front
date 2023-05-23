import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import cookie from "../../../assets/icon/Main/cookie.png";
import logo from "../../../assets/logo/logo.png";
import profile from "../../../assets/icon/Main/profile.png";
import search from "../../../assets/icon/Main/search.png";

const MainNavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // 로고 클릭 시 "/" 경로로 이동
    window.location.reload(); // 새로고침
  };

  return (
    <Div>
      <ProfileIcon src={profile} />
      <MainLogo src={logo} onClick={handleLogoClick} />
      <CookieIcon src={cookie} />
      <SearchIcon src={search} />
    </Div>
  );
};

export default MainNavBar;

const Div = styled.div`
  position: relative;
  top: 0px;

  display: flex;
  align-items: center;

  height: 141px;
  background-color: #00dc64;
`;

const MainLogo = styled.img`
  position: absolute;
  width: 120px;
  height: 30px;
  left: calc(50% - 120px / 2 - 1px);
  top: 79px;
`;

const ProfileIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;

  left: 26px;
  top: 82px;
`;

const CookieIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;

  right: 63px;
  top: 86.64px;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 18.93px;
  height: 19.85px;

  right: 24.92px;
  top: 86.64px;

  transform: rotate(-14.28deg);
`;
