import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import RhombusPatternImage from '../images/RhombusPattern.jpeg'

const AboutUsPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <WineDetailedPageContainer isDropdownOpen={isDropdownOpen}>
        <Header 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
        <ContentWrapper>
          <CategoryTitle 
            src={RhombusPatternImage}
            isDropdownOpen={isDropdownOpen}>
            Shop
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <MainContent>
        <MapContent>
          여기는 지도
        </MapContent>
        <InfoContent>
          <NameContent>
            <div>로고</div>
            <div>주소</div>
          </NameContent>
          <NumberContent>
            <div>번호</div>
            <div>쉬는날</div>
          </NumberContent>
        </InfoContent>
      </MainContent>
    </Container>
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

const Container = styled.div`
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
  width: 100%;
  min-height: calc(100vh - 350px);
  margin-top: 300px;
  font-family: 'SSShinb7Regular', serif;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;  
`;

const MapContent = styled.div`
  height: 600px;
  width: 700px;
  background-color: white;
  margin-top: 80px; 
`;

const InfoContent = styled.div`
  margin-top: 80px;
  margin-bottom: 150px;
`;

const NameContent = styled.div`
  display: flex;
  margin-bottom: 50px;
  gap: 100px;
`;

const NumberContent = styled.div`
  display: flex;
  gap: 100px;
`;