'use client';

import { useLayoutEffect, useRef } from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bannerImg_1 from '@images/banner/banner-1.webp';
import bannerImg_2 from '@images/banner/banner-2.webp';
import bannerImg_3 from '@images/banner/banner-3.webp';

export default function IntroSection() {
  const theme = useTheme();
  const sectionBackground = useRef(null);
  const background = useRef(null);
  const title = useRef(null);
  const titleH2 = useRef(null);
  const introList = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timelineCenter = gsap.timeline({
      scrollTrigger: {
        trigger: sectionBackground.current,
        start: 'center bottom',
      },
    });

    timelineCenter
      .from(background.current, {
        top: '-100%',
      })
      .to(background.current, {
        top: '50%',
      })
      .to(title.current, {
        top: '50%',
        transform: 'translate(-50%,-50%) scale(1)',
      });

    const timelineBottom = gsap.timeline({
      scrollTrigger: {
        trigger: sectionBackground.current,
        start: 'bottom bottom',
      },
    });

    timelineBottom
      .to(
        title.current,
        {
          top: '8rem',
        },
        0
      )
      .to(
        titleH2.current,
        {
          fontSize: '2rem',
        },
        0
      )
      .to(background.current, {
        width: '100%',
        height: '100%',
        borderRadius: '0',
      })
      .from(
        introList.current,
        {
          x: '100vw',
          opacity: 0,
        },
        1
      )
      .to(
        introList.current,
        {
          x: 0,
          opacity: 1,
          ease: 'power1.inOut',
          duration: 2,
        },
        2
      );
  }, []);

  const cards = [
    {
      title: '商品攝影',
      description: '讓您的商品質感升級',
      image: bannerImg_1,
    },
    {
      title: '旅遊跟拍',
      description: '出門就是要好好玩！青春回憶永存',
      image: bannerImg_2,
    },
    {
      title: '人物攝影',
      description: '企業訪談、提升品牌力！',
      image: bannerImg_3,
    },
  ];


  return (
    <Box
      component='section'
      sx={{
        py: 10,
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
      ref={sectionBackground}
    >
      <Box
        ref={background}
        bgcolor={theme.palette.secondary.light}
        sx={{
          width: '416px',
          height: '500px',
          margin: '0 auto',
          borderRadius: '300px 300px 0 0',
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      ></Box>
      <Box
        ref={title}
        sx={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%,-50%) scale(2)',
          textAlign: 'center',
        }}
      >
        <Typography
          ref={titleH2}
          component='h2'
          sx={{
            fontSize: '4.5rem',
            fontWeight: '700',
            lineHeight: '1.2',
            mb: 3,
          }}
        >
          我們希望您獲得更多
        </Typography>
        <Typography
          component='h3'
          sx={{
            typography: 'title',
          }}
        >
          這不單單只是拍照攝影而已，因為我們始終把您的需求放在最前面
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, pt: 16, pb: 4, px: 2 }} ref={introList}>
        <Grid container spacing={3} justifyContent='center'>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: '120px 120px 16px 16px',
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <CardMedia
                  component='img'
                  height={{md: '556px', sx: '424px'}}
                  image={card.image.src}
                  alt={title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  <Typography variant='h6' fontWeight='bold'>
                    {card.title}
                  </Typography>
                  <Typography variant='body2'>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
