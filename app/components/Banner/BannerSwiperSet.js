import 'swiper/css';
import 'swiper/css/free-mode';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Box, styled, useMediaQuery, useTheme } from "@mui/material"
import Image from 'next/image';

import bannerImg_1 from '@images/banner/banner-1.webp'
import bannerImg_2 from '@images/banner/banner-2.webp'
import bannerImg_3 from '@images/banner/banner-3.webp'
import bannerImg_4 from '@images/banner/banner-4.webp'
import bannerImg_5 from '@images/banner/banner-5.webp'
import bannerImg_6 from '@images/banner/banner-6.webp'
import bannerImg_7 from '@images/banner/banner-7.webp'
import bannerImg_8 from '@images/banner/banner-8.webp'
import bannerImg_9 from '@images/banner/banner-9.webp'
import bannerImg_10 from '@images/banner/banner-10.webp'
import bannerImg_11 from '@images/banner/banner-11.webp'
import bannerImg_12 from '@images/banner/banner-12.webp'

const bannerImgeSet_1 = [bannerImg_1, bannerImg_2, bannerImg_3, bannerImg_4]
const bannerImgeSet_2 = [bannerImg_5, bannerImg_6, bannerImg_7, bannerImg_8]
const bannerImgeSet_3 = [bannerImg_9, bannerImg_10, bannerImg_11, bannerImg_12]

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  height: '100vh',
  '& .swiper-wrapper': {
    transitionTimingFunction: 'linear'
  }
}));

const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '168px',
    height: '240px',
    marginBottom: '1rem'
  },
  [theme.breakpoints.up('sm')]: {
    width: '320px',
    height: '460px',
    marginBottom: '1.5rem'
  },
  overflow: 'hidden',
  borderRadius: '0.75rem',
  '& img': {
    borderRadius: '0.75rem',
  }
}));

export default function BannerSwiperSet() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const getBannerImgWidth = () => {
    if (matchesSm) {
      return 320;
    } else {
      return 168;
    }
  };

  return (
    <Box 
      component="div"
      style={{
        pointerEvents: 'none'
      }}
    >
      <StyledSwiper
        slidesPerView={'auto'}
        simulateTouch={false}
        allowTouchMove={false}
        direction={'vertical'}
        speed={12000}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay, FreeMode]}
        sx={{
          position: 'absolute',
          top: 0,
          left: {
            xs: '1rem',
            sm: '4.5rem',
            md: '33rem',
            lg: 'auto'
          },
        }}
      >
        {bannerImgeSet_1.map((img, index) => {
          return (
            <StyledSwiperSlide
              key={index}
            >
              <Image 
                src={img}
                alt={`banner-${index}`}
                width={getBannerImgWidth()}
              />
            </StyledSwiperSlide>)
        })}
      </StyledSwiper>

      <StyledSwiper
        slidesPerView={'auto'}
        simulateTouch={false}
        direction={'vertical'}
        speed={19000}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay, FreeMode]}
        sx={{
          position: 'absolute',
          top: 0,
          left: {
            xs: '1rem',
            sm: '4.5rem',
            md: '33rem',
            lg: 'auto'
          },
          ml: {
            xs: '1rem',
            sm: '1.5rem'
          },
          '& .swiper-wrapper': {
            transitionTimingFunction: 'linear',
          }
        }}
        style={{
          transform: 'translateX(100%)'
        }}
      >
        {bannerImgeSet_2.map((img, index) => {
          return (
            <StyledSwiperSlide
              key={index}
            >
              <Image 
                src={img}
                alt={`banner-${index + 5}`}
                width={getBannerImgWidth()}
              />
            </StyledSwiperSlide>)
        })}
      </StyledSwiper>

      <StyledSwiper
        slidesPerView={'auto'}
        simulateTouch={false}
        direction={'vertical'}
        speed={16000}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay, FreeMode]}
        sx={{
          visibility: {
            xs: 'visible',
            sm: 'hidden',
            lg: 'visible'
          },
          position: 'absolute',
          top: 0,
          ml:{
            xs: '2rem',
            lg: '3rem'
          },
        }}
        style={{
          transform: 'translateX(200%)',
        }}
      >
        {bannerImgeSet_3.map((img, index) => {
          return (
            <StyledSwiperSlide
              key={index}
            >
              <Image 
                src={img}
                alt={`banner-${index + 9}`}
                width={getBannerImgWidth()}
              />
            </StyledSwiperSlide>)
        })}
      </StyledSwiper>

    </Box>
  )
}
