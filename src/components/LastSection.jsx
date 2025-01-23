import React from 'react';
import styled from 'styled-components';
import LeftImage from '../images/LeftImage.png';
import RightImage from '../images/RightImage.jpeg';
import PizzaImage from "../images/Pizza.png"
import CheerGirlImage from "../images/CheerGirl.png"
import MaskingImage from "../images/Masking.png";
import StarImage from "../images/Star.png"
import RImage from "../images/R.jpeg"
import O2Image from "../images/O2.jpeg"
import CImage from "../images/C.jpeg"
import KImage from "../images/K.jpeg" 

const LastSection = () => {
  return (
    <LastSectionContainer>
      <ContentWrapper>
        <Pizza src = {PizzaImage}></Pizza>
        <LeftImageContainer>
          <LastSectionLeftImage src={LeftImage} alt="left" />
        </LeftImageContainer>
        <TextContainer>
          <RMiddleImage src ={RImage}></RMiddleImage>
          <OSecondMiddleImage src ={O2Image}></OSecondMiddleImage>
          <CMiddleImage src ={CImage}></CMiddleImage>
          <KMiddleImage src ={KImage}></KMiddleImage>
          <Description>
            각 술의 독특한 이야기를 담아, 
            <br/>
            당신만의 술 여정을 안내합니다. 
            <br/>
            새로운 맛을 탐험하고, 
            <br/>
            술의 예술을 깊이 있게 이해해 보세요. 
            <br/>
            한 잔의 여유로 특별한 경험을 시작하세요.
          </Description>
        </TextContainer>
        <CheerGirl src = {CheerGirlImage}></CheerGirl>
        <Star src = {StarImage}></Star>
        <RightImageContainer>
          <CornerImageTop src={MaskingImage} alt="corner-top" />
          <LastSectionRightImage src={RightImage} alt="right" />
          <CornerImageBottom src= {MaskingImage}/>
        </RightImageContainer>
      </ContentWrapper>
    </LastSectionContainer>
  );
};

export default LastSection;

const LastSectionContainer = styled.div`
  height: 530px;
  background-color: #F2F0EA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
`;

const LeftImageContainer = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const RightImageContainer = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  position: relative;
`;

const LastSectionLeftImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const LastSectionRightImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  transform: rotate(-10deg);
  position: relative; 
  overflow: hidden; 
`;

const Pizza = styled.img`
  position: absolute;
  width: 280px;
  z-index: 2;
  transform: translateX(-30%) translateY(-120%) rotate(-5deg)
`;

const Cheese = styled.img`
  position: absolute;
  width: 200px;
  z-index: 2;
  transform: translateX(-37%) translateY(-80%) rotate(-5deg)
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 20px;
  padding-top: 150px;
`;

const RMiddleImage = styled.img`
  position: absolute;
  right: 55%;
  transform: translateX(-0%) translateY(10%) rotate(-5deg); 
  width: 80px; 
  height: auto;
  z-index: 2; 
`;

const OSecondMiddleImage = styled.img`
  position: absolute; 
  transform: translateX(-80%) translateY(10%) rotate(5deg); 
  width: 70px;  
  height: auto;
  z-index: 2;
`;

const CMiddleImage = styled.img`
  position: absolute;
  leftt: 30%;
  transform: translateX(40%) translateY(10%);
  width: 70px;   
  height: auto;
  z-index: 2;     
`;

const KMiddleImage = styled.img`
  position: absolute; 
  leftt: 30%;
  transform: translateX(160%) translateY(10%) rotate(5deg);
  width: 70px;  
  height: auto;
  z-index: 2;       
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #666;
  line-height: 1.3;
  font-family: 'SSShinb7Regular', serif;
  font-weight: bold;
  padding-top: 120px;
`;

const LifeLetter = styled.img`
  position: absolute;
  transform: translateX(-20%) translateY(10%) rotate(5deg);
  width: 250px;
  height: auto;
  z-index: 2;
`;

const CheerGirl = styled.img`
  position: absolute;
  right: 0; 
  transform: translateX(-140%) translateY(20%) rotate(5deg);
  width: 250px;
  height: auto;
  z-index: 2;
`;

const Star = styled.img`
  position: absolute;
  transform: translateX(370%) translateY(-80%) rotate(40deg);
  width: 270px;
  height: auto;
  z-index: 2;
`;

const CornerImageTop = styled.img`
  position: absolute;
  top: -15%;       
  left: 40%;          
  transform: translateX(-90%) translateY(10%) rotate(-40deg);  
  width: 150px;
  height: auto;
  z-index: 2; 
`;

const CornerImageBottom = styled.img`
  position: absolute;
  bottom: -10%; 
  left: 50%;          
  transform: translateX(90%) translateY(-10%) rotate(-45deg); 
  width: 150px;
  height: auto;
  z-index: 2; 
`;

