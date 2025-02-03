import React, { useState } from 'react';
import Header from "../components/Header"
import styled from 'styled-components';
import FlowerPatternImage from '../images/FlowerPattern.jpeg'

const BeerInfoPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      <WineDetailedPageContainer isDropdownOpen={isDropdownOpen}>
        <Header 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
        <ContentWrapper>
          <CategoryTitle 
            src={FlowerPatternImage}
            isDropdownOpen={isDropdownOpen}>
            ale
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <WineInfoContainer>
        <WineImageSection>상세이미지</WineImageSection>
        <WineDetailsSection>
          <DetailItem>Price</DetailItem>
          <DetailItem>Name</DetailItem>
          <DetailItem>rating</DetailItem>
        </WineDetailsSection>
      </WineInfoContainer>
    </Container>
  );
};

export default BeerInfoPage;

const Container = styled.div`
  background-color: #F2F0EA;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: auto;
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
    background-position: center;
    background-size: 400px 600px;
    background-repeat: repeat;  
    opacity: 0.6;
    z-index: -1;
  }
`;

const WineInfoContainer = styled.div`
  display: flex;
  margin: 100px;
  margin-top: 350px; 
  gap: 100px;
`;

const WineImageSection = styled.div`
  flex: 1;
  width: 200px;
  height: 350px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;
  margin: 30px;
`;

const WineDetailsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px;
  margin-top: 100px;
`;

const DetailItem = styled.div`
  padding: 15px;
  border-radius: 8px;
  font-family: 'SSShinb7Regular', serif;
  font-size: 3rem;
`;