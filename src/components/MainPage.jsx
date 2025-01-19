import React from 'react';
import styled from "styled-components";
import LogoImage from "../images/OnTheRocksLogo.png"
import DownArrowIcon from "../icons/DownArrowIcon.svg"

const MainPage = () => {
  return (
    <Container>
        <Header>
          <HeaderImage src = {LogoImage} alt = "logoimage"/>
          <HeaderList>
            <List>About us</List>
            <List>Wines</List>
            <List>Spirits</List>
            <List>Shop</List>
          </HeaderList>
          <HeaderLogin>
            <LoginList>login</LoginList>
          </HeaderLogin>
        </Header>
      <Footer>
        <FooterInfoContainer>
          <FooterList>
            <InfoList>개인정보보호정책</InfoList>
            <InfoList>이용약관</InfoList>
            <InfoList>오시는 길</InfoList>
          </FooterList>
          <FooterContent>
            <div>대표이사 : 윤주연</div>
            <div>주소 : 서울시 강남구 ——</div>
            <div>사업자등록번호 : 111-11-11111</div>
            <div>TEL : 02-1234-5678</div>
            <div>평일 09:30 – 18:00 / 주말 및 공휴일 휴무</div>
            <div>Hosting by I'MWEB</div>
            <div>Copyright 2025 ⓒ On The Rocks All right reserved.</div>
          </FooterContent>
        </FooterInfoContainer>
        <FooterContentConatiner>
          <FooterCommuity>
            <CommuityLogoIcon src = {DownArrowIcon}/>
            <CommuityLogo>Our Commuity</CommuityLogo>
          </FooterCommuity>
        </FooterContentConatiner>
        {/* <CommuityList>Instagram</CommuityList>
        <CommuityList>Facebook</CommuityList>
        <CommuityList>Youtube</CommuityList> */}
      </Footer>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  min-width: 1200px; // 최소 너비 설정
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  min-height: 100%;
  margin-top: 20px;
`;

const HeaderImage = styled.img`
  width: 300px;
  cursor: pointer;
  padding-left: 20px;
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
`;

const List =  styled.li`
  padding-left: 100px;
  cursor: pointer;
`;

const LoginList = styled.li`
  cursor: pointer;
`;

const HeaderLogin = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 100px;
`;

const Footer = styled.div`
  min-width: 1200px; 
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  transform: translateY(200%);
  background-color: lightgray;
  justify-content: space-between;
`;

const FooterInfoContainer = styled.div`
  align-items: center;
  padding-left: 100px;
  height: 200px;
`;

const FooterList = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

const InfoList = styled.div`
  padding-left: 30px;
  cursor: pointer;
`;

const FooterContentConatiner = styled.div`
  align-items: center;
  padding-right: 120px;
  padding-top: 40px;
`;

const FooterCommuity = styled.div`
  font-size: 2rem;
  display: flex;
`;

const FooterContent = styled.div`
  padding-left: 30px;
  padding-top: 30px;
`;

const CommuityLogoIcon = styled.img`
  width: 20px;
  padding-right: 20px;
  padding-top: 5px;
`;

const CommuityLogo = styled.div`
  cursor: pointer;
`;

const CommuityList = styled.li`
  padding: 10px;
  cursor: pointer;
`;