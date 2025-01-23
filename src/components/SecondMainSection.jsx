import React from 'react';
import styled from 'styled-components';
import MaskingImage from "../images/Masking.png";
import BeerImage from "../images/BeerPage.jpeg"
import FirstBeerMan from "../images/FirstBeerMan.png"
import SecondBeerMan from "../images/SecondBeerMan.png"
import ThridBeerMan from "../images/ThirdBeerMan.png"
import TodayProduct from "../images/TodayProduct.png"
import PensilStar from "../images/PensilStar.png"
import OImage from "../images/O.jpeg"
import NImage from "../images/N.jpeg"
import TImage from "../images/T.jpeg"
import HImage from "../images/H.jpeg"
import EImage from "../images/E.png"

const SecondMainSection = () => {
  return (
    <MainSectionContainer>
      <FirstMainSection>
        <ImageContainer>
          <CornerImageTop src={MaskingImage} alt="corner-top" />
          <FirstMainSectionImage src={BeerImage} alt="Beer" />
          <CornerImageBottom src={MaskingImage} alt="corner-bottom" />
        </ImageContainer>
        <BeerFirstMiddleImage src={FirstBeerMan} alt="middle-image" />
        <PensilStarImage src ={PensilStar}/>
        <PensilStarSecondImage src ={PensilStar}/>
        <BeerSecondMiddleImage src={SecondBeerMan} alt="middle-image" />
        <BeerThridMiddleImage src={ThridBeerMan} alt="middle-image"/>
        <OMiddleImage src ={OImage}></OMiddleImage>
        <NMiddleImage src ={NImage}></NMiddleImage>
        <TMiddleImage src ={TImage}></TMiddleImage>
        <HMiddleImage src ={HImage}></HMiddleImage>
        <EMiddleImage src ={EImage}></EMiddleImage>
        <MainSlogan>
          <TitleText>Today's Recommendation</TitleText>
          <ProductsContainer>
            <ProductItem>
              <ProductName>Amarone della Valpolicella Riserva N.V.</ProductName>
              <ImageButtonContainer>
                <ProductImage src={TodayProduct} alt="product" />
                <LinkButton>Product Link </LinkButton>
              </ImageButtonContainer>
            </ProductItem>
          </ProductsContainer>
        </MainSlogan>
      </FirstMainSection>
    </MainSectionContainer>
  );
};

export default SecondMainSection;

const MainSectionContainer = styled.div`
  width: 100vw;
  height: 600px;
  background-color: #F2F0EA;
  font-family: 'JacksonAmor', serif;
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 30px;
`;

const FirstMainSection = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const MainSlogan = styled.div`
  color: #C1121F;
  flex: 1;               
  z-index: 1;
  text-align: center; 
  margin: 20px 0; 
  padding-right: 60px; 
`;

const PensilStarImage = styled.img`
  position: absolute; 
  left: 54%;         
  transform: translateX(-100%) translateY(-20%) rotate(-30deg); 
  width: 300px;      
  height: auto;
  z-index: 2;  
`;

const PensilStarSecondImage = styled.img`
  position: absolute; 
  left: 56%;          
  transform: translateX(-100%) translateY(60%) rotate(-30deg);
  width: 200px;
  height: auto;
  z-index: 2;     
`;

const BeerFirstMiddleImage = styled.img`
  position: absolute;  
  left: 25%;          
  transform: translateX(-100%) translateY(10%) rotate(-30deg); 
  width: 200px;   
  height: auto;
  z-index: 2;         
`;

const BeerSecondMiddleImage = styled.img`
  position: absolute; 
  left: 81%;          
  transform: translateY(-10%) rotate(10deg);
  width: 130px;       
  height: auto;
  z-index: 1;      
`;

const BeerThridMiddleImage = styled.img`
  position: absolute;  
  left: 87%;       
  transform: translateY(-5%) rotate(-10deg); 
  width: 180px;       
  height: auto;
  z-index: 2;     
`;

const OMiddleImage = styled.img`
  position: absolute;  
  left: 55%;
  top: 70%;      
  transform: translateX(-65%) translateY(100%) rotate(10deg); 
  width: 100px;       
  height: auto;
  z-index: 2;        
`;

const NMiddleImage = styled.img`
  position: absolute; 
  left: 65%;   
  top: 80%;    
  transform: translateX(-90%) translateY(100%) rotate(10deg); 
  width: 100px;      
  height: auto;
  z-index: 2;       
`;

const TMiddleImage = styled.img`
  position: absolute;  
  left: 47%;  
  top: 100%;     
  transform: translateX(-50%) translateY(70%) rotate(5deg); 
  width: 80px;      
  height: auto;
  z-index: 2;         
`;

const HMiddleImage = styled.img`
  position: absolute; 
  left: 55%;
  top: 100%;        
  transform: translateX(-90%) translateY(70%); 
  width: 80px;       
  height: auto;
  z-index: 2;       
`;

const EMiddleImage = styled.img`
  position: absolute;  
  left: 61%; 
  top: 95%;     
  transform: translateX(-90%) translateY(70%) rotate(10deg); 
  width: 80px;       
  height: auto;
  z-index: 2;        
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;  // 추가
`;

const FirstMainSectionImage = styled.img`
  width: calc(500px - 100px);  
  height: calc(600px - 100px); 
  margin: 50px;  // 네 방향 모두 50px 여백
  background-color: lightgray;
  display: flex;
  justify-content: center; 
  align-items: center;      
  flex: 1;                 
  object-fit: cover;  
  border-radius: 50% 20% / 10% 40%;
`;

const CornerImageTop = styled.img`
  position: absolute;
  width: 200px; 
  height: 200px; 
  top: -20px;   
  left: -20px;  
  transform: rotate(-45deg); 
`;

const CornerImageBottom = styled.img`
  position: absolute;
  width: 200px; 
  height: 200px;  
  bottom: -15px;  
  right: -20px;   
  transform: rotate(-45deg); 
`;

const TitleText = styled.div`
  font-size: 4.5rem;
  padding-right: 230px;
`;

const ProductsContainer = styled.div`
  display: flex;
  width: 80%;
  padding-left: 90px;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 30px;
`;

const ProductName = styled.div`
  font-size: 2rem;
  color: #333;
  text-align: center;
  width: 100px;
  padding-bottom: 70px;
  font-family: 'SSShinb7Regular', serif;
`;

const ImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ProductImage = styled.img`
  width: 300px;
  object-fit: cover;
  border-radius: 8px;
  padding-left: 30px;
`;

const LinkButton = styled.div`
  cursor: pointer;
  font-size: 2rem;
  padding-left: 170px;
  font-family: 'SSShinb7Regular', serif;
`;