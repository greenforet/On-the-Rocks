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
            SHOP
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <MainContent>
        <MapContent>
          여기는 지도
        </MapContent>
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
  height: ${props => props.isDropdownOpen ? '400px' : '130px'};
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
  padding-top: 20px;
  font-family: 'JacksonAmor', serif;
  margin-top: ${props => props.isDropdownOpen ? '400px' : '130px'};
  transition: margin-top 0.5s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.src});
    background-size: 300px 500px;
    background-repeat: repeat;  
    background-position: center;
    opacity: 0.6;
    z-index: -1;
  }
`;

const MainContent = styled.div`
  width: 700px;
  margin: 350px auto 0;
  font-family: 'SSShinb7Regular', serif;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const MapContent = styled.div`
  heiht: 400px;
  width: 400px;
  background-color; white;
`;