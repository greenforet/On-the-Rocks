import React, { useState } from 'react';
import styled from "styled-components";
import LogoImage from "../images/OnTheRocksLogo.png"
import DownArrowIcon from "../icons/DownArrowIcon.svg"
import CircleImage from "../images/Circle.png";


const MainPage = () => {
  const [isWinesOpen, setIsWinesOpen] = useState(false);
  const [isBeersOpen, setIsBeersOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <Container>
      <Header>
        <HeaderImage src = {LogoImage} alt = "logoimage"/>
        <HeaderList>
          <List>About us</List>
          <WinesList 
            onMouseEnter={() => setIsWinesOpen(true)}
            onMouseLeave={() => setIsWinesOpen(false)}
          >
            <List>Wines</List>
            <DropdownMenu isOpen={isWinesOpen}>
              <li>reds</li>
              <li>whites</li>
              <li>sparkling</li>
              <li>rose</li>
              <li>dessert</li>
              <li>port</li>
            </DropdownMenu>
          </WinesList>
          <BeersList
            onMouseEnter={() => setIsBeersOpen(true)}
            onMouseLeave={() => setIsBeersOpen(false)}
          >
            <List>Beers</List>
            <DropdownMenu isOpen={isBeersOpen}>
              <li>ale</li>
              <li>stouts</li>
              <li>red-ale</li>
            </DropdownMenu>
          </BeersList>
          <List>Shop</List>
        </HeaderList>
        <HeaderLogin>
          <LoginList>login</LoginList>
        </HeaderLogin>
      </Header>
      <MainSection>
        <FirstMainSection></FirstMainSection>
        <SecondMainSection></SecondMainSection>
      </MainSection>
      <Footer>
        <FooterInfoContainer>
          <FooterList>
            <InfoList>개인정보보호정책</InfoList>
            <InfoList>이용약관</InfoList>
            <InfoList>오시는 길</InfoList>
          </FooterList>
          <FooterContent>
            <Content>대표이사 : 윤주연</Content>
            <Content>주소 : 서울시 강남구 ——</Content>
            <Content>사업자등록번호 : 111-11-11111</Content>
            <Content>TEL : 02-1234-5678</Content>
            <Content>평일 09:30 – 18:00 / 주말 및 공휴일 휴무</Content>
            <FooterCopyRight>Copyright 2025 ⓒ On The Rocks All right reserved.</FooterCopyRight>
          </FooterContent>
        </FooterInfoContainer>
        <FooterContentConatiner>
          <FooterCommuity>
            <CommuityLogoIcon 
              src={DownArrowIcon} 
              onClick={() => setIsCommunityOpen(!isCommunityOpen)}  // 클릭 이벤트 추가
              isOpen={isCommunityOpen}  // 아이콘 회전을 위한 prop
            />
            <FooterDropdownMenu isOpen={isCommunityOpen}>
              <CommuityList>Instagram</CommuityList>
              <CommuityList>Facebook</CommuityList>
              <CommuityList>Youtube</CommuityList>
            </FooterDropdownMenu>
            <CommuityLogo>Our Commuity</CommuityLogo>
          </FooterCommuity>
        </FooterContentConatiner>
      </Footer>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  min-width: 1200px;
  width: 100vw;
  min-height: 100vh;
  background-color: #F2F0EA;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const HeaderImage = styled.img`
  width: 300px;
  cursor: pointer;
  padding-left: 20px;
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  gap: 100px; 
`;

const List =  styled.li`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 20px 0;
  &::before {
    content: '';
    position: absolute;
    top: -97px;
    left: 90%;
    transform: translateX(-55%);
    width: 200px;
    height: 300px;
    background-image: url(${CircleImage});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.3s ease; 
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const WinesList = styled.div`
  position: relative;
  cursor: pointer;
  &:hover ${List}::before {
    opacity: 1;
  }
`;

const BeersList = styled.div`
  position: relative;
  cursor: pointer;
  &:hover ${List}::before { 
    opacity: 1;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #93C6E7;
  padding: 15px 25px;
  border-radius: 50% 20% / 10% 40%;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.5s ease;
  z-index: 1;
  
  li {
    list-style: none;
    padding: 8px 0;
    font-size: 1.2rem;
    white-space: nowrap;
    cursor: pointer;
    
    &:hover {
      color: #666;
    }
  }
`;


const LoginList = styled.li`
  display: inline-block;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: gray;
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
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
  transform: translateY(100%);
  background-color: #93C6E7;
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
  position: relative; 
  font-size: 2rem;
  display: flex;
`;

const FooterContent = styled.div`
  padding-left: 30px;
  padding-top: 30px;
`;

const Content = styled.div`
  padding-bottom: 3px;
`;

const FooterCopyRight = styled.div`
  padding-top: 20px;
`;

const CommuityLogoIcon = styled.img`
  width: 20px;
  padding-right: 20px;
  padding-top: 5px;
  cursor: pointer;
  transform-origin: 30% 55%; 
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
  transition: transform 0.3s ease;
`;

const FooterDropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 20px;
  left: 0;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.5s ease;
  z-index: 1;
`;

const CommuityLogo = styled.div`
  cursor: pointer;
`;

const CommuityList = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

const MainSection = styled.div``;

const FirstMainSection = styled.div``;

const SecondMainSection = styled.div``;

