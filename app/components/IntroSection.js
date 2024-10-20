'use client';

import { useLayoutEffect, useRef } from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntroSection() {
  const theme = useTheme();
  const sectionBackground = useRef(null);
  const background = useRef(null);
  const title = useRef(null);
  const titleH2 = useRef(null);
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
      });
  }, []);

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
    </Box>
  );
}
