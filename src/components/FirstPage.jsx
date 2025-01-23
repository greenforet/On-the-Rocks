import React from 'react';
import styled from 'styled-components';
import FirstMainImage from "../images/FirstMainPage.jpeg"; 
import SecondMainImage from "../images/SecondMainPage.jpeg"
import ThirdMainImage from "../images/ThirdMainPage.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const FirstPage = () => {
  const images = [
    FirstMainImage,
    SecondMainImage,
    ThirdMainImage
  ];

  return (
    <FirstPageContainer>
    <StyledSwiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect={'fade'}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <SlideImage src={image} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
    </FirstPageContainer>
  );
};

export default FirstPage;

const FirstPageContainer = styled.div`
  position: relative;
  height: 900px;
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 900px; 
  object-fit: cover;
`;