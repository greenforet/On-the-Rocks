import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import PartyPeopleImage from '../images/PartyPeople.png'

const AboutUsPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <WineDetailedPageContainer isDropdownOpen={isDropdownOpen}>
        <Header 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
        <ContentWrapper>
          <CategoryTitle 
            isDropdownOpen={isDropdownOpen}>
            About Us
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <MainContent>
        <p>"술, 한 잔의 모험"</p>
        <StyledParagraph indent="4rem">
          안녕하세요! 이곳은 단순히 술을 소개하는 사이트가 아니에요. 술을 고를 때마다 "오늘은 또 어떤 맛일까?" 하는 그 궁금함과 설렘을 느낄 수 있는 작은 술 다이어리 같은 공간이에요.
        </StyledParagraph>
        <StyledParagraph indent="1rem">
          저는 술을 좋아하지만, 그보다 각 술마다 맛과 향이 얼마나 다를까? 하는 걸 경험하는 게 더 재밌어요. 와인 한 모금, 맥주 한 캔, "이건 또 어떤 맛이지?" 하는 그 순간들이 정말 신기하고 재밌더라고요. 그래서 그런 경험들을 여러분과 나누고 싶었어요.
        </StyledParagraph>
        <StyledParagraph indent="3rem">
          여기선 복잡한 설명은 빼고, 간단하게 술의 이름과 특징만 소개해요. 딱딱하지 않게, 사진도 예쁘고 폰트도 아기자기하게 꾸며서 마치 술 고르는 작은 여행을 떠나는 기분이 들도록 했어요.
        </StyledParagraph>
        <StyledParagraph indent="2rem">
          술을 고를 때 "오늘은 어떤 술을 마셔볼까?" 하는 고민을 조금 더 재미있고 가볍게 만들어주는 공간이에요. 자, 그럼 오늘은 어떤 술을 선택할까요?
        </StyledParagraph>
      </MainContent>
      <LastContent>
        <FirstBottomImage src = {PartyPeopleImage}></FirstBottomImage>
        <SecondBottomImage>이미지2</SecondBottomImage>
      </LastContent>
    </>
  );
};

export default AboutUsPage;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #F2F0EA;
  }

  #root {
    height: 100%;
  }
`;

const WineDetailedPageContainer = styled.div`
  min-width: 1200px; 
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #F2F0EA;

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isDropdownOpen ? '400px' : '150px'};
  background-color: #93C6E7;
  transition: all 0.5s ease;
  opacity: ${props => props.isDropdownOpen ? 1 : 0};
  z-index: -1;
}
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryTitle = styled.div`
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding-top: ${props => props.isDropdownOpen ? '50px' : '30px'};
  font-family: 'JacksonAmor', serif;
  margin-top: ${props => props.isDropdownOpen ? '400px' : '130px'};
  transition: margin-top 0.5s ease;
  position: relative;
  background: ${props => props.isDropdownOpen ? '#F2F0EA' : '#93C6E7'};
  z-index: 1; 

  // 상단 웨이브 라인
  &::before {
    content: '';
    position: absolute;
    top: -37px;
    left: 0;
    width: 100%;
    height: 75px;
    opacity: ${props => props.isDropdownOpen ? 1 : 0};
    transition: all 0.5s ease;
    background: #93C6E7;
    --s: 50px;
    --b: 50px;
    --m: 2.5;
    --R: calc(var(--s)*sqrt(var(--m)*var(--m) + 1) + var(--b)/2);
    --_g: #0000 calc(99% - var(--b)), #F2F0EA calc(101% - var(--b)) 99%, #0000 101%;
    mask: 
      radial-gradient(var(--R) at left 50% bottom calc(-1*var(--m)*var(--s)), var(--_g)) 
        calc(50% - 2*var(--s)) calc(50% - var(--s)/2 - var(--b)/2)/calc(4*var(--s)) calc(var(--s) + var(--b)) repeat-x,
      radial-gradient(var(--R) at left 50% top calc(-1*var(--m)*var(--s)), var(--_g)) 
        50% calc(50% + var(--s)/2 + var(--b)/2)/calc(4*var(--s)) calc(var(--s) + var(--b)) repeat-x;
  }

  // 하단 웨이브 라인
  &::after {
    content: '';
    position: absolute;
    bottom: -36px;
    left: 0;
    width: 100%;
    height: 75px;
    opacity: ${props => props.isDropdownOpen ? 0 : 1};
    background: #93C6E7;
    --s: 50px;
    --b: 50px;
    --m: 2.5;
    --R: calc(var(--s)*sqrt(var(--m)*var(--m) + 1) + var(--b)/2);
    --_g: #0000 calc(99% - var(--b)), #F2F0EA calc(101% - var(--b)) 99%, #0000 101%;
    mask: 
      radial-gradient(var(--R) at left 50% bottom calc(-1*var(--m)*var(--s)), var(--_g)) 
        calc(50% - 2*var(--s)) calc(50% - var(--s)/2 - var(--b)/2)/calc(4*var(--s)) calc(var(--s) + var(--b)) repeat-x,
      radial-gradient(var(--R) at left 50% top calc(-1*var(--m)*var(--s)), var(--_g)) 
        50% calc(50% + var(--s)/2 + var(--b)/2)/calc(4*var(--s)) calc(var(--s) + var(--b)) repeat-x;
  }
`;

const MainContent = styled.div`
  width: 700px;
  margin: 350px auto 0;
  font-family: 'SSShinb7Regular', serif;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p:first-child {  
    font-size: 2rem;
    margin-left: 2rem;
    color: #555;
  }
`;

const StyledParagraph = styled.p`
  margin-left: ${props => props.indent || '0'};
  margin-bottom: 0rem;
  line-height: 1.5;
`;

const LastContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;

`;

const FirstBottomImage = styled.img`
  bottom: 0;
  width: 450px; 
  height: auto;
  opacity: 0.8;
`;

const SecondBottomImage = styled.div`
  bottom: 0;
  background-color: gray;
`;