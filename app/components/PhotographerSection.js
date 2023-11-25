'use client';

import { useRef, useLayoutEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Marquee from '@/app/components/Marquee';
import PhotographerCard from '@/app/components/PhotographerCard';
import EastIcon from '@mui/icons-material/East';
import { photographers } from '@/app/lib/placeholder-data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Noto_Sans_TC } from 'next/font/google';
import photographerBg from '../../public/phorographer-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function PhotographerSection() {
  const main = useRef();
  const background = useRef();
  const photographerList = useRef();
  const link = useRef();
  const title = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const marquee = main.current.querySelector('[data-marquee]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: 'center bottom',
      },
    });

    tl.from(background.current, {
      width: '25%',
      height: 'auto',
    })
      .to(
        marquee,
        {
          x: -1200,
          ease: 'power1.inOut',
          duration: 3,
        },
        0
      )
      .to(
        background.current,
        {
          width: '100%',
          height: '100%',
          ease: 'power1.inOut',
          duration: 3,
        },
        0
      )
      .from(
        title.current,
        {
          y: '-100vh',
        },
        0
      )
      .to(
        title.current,
        {
          y: 0,
          ease: 'power1.inOut',
          duration: 1,
        },
        1
      )
      .from(
        photographerList.current,
        {
          x: '100vw',
          opacity: 0,
        },
        0
      )
      .to(
        photographerList.current,
        {
          x: 0,
          opacity: 1,
          ease: 'power1.inOut',
          duration: 2,
        },
        2
      )
      .from(
        link.current,
        {
          x: '100vw',
        },
        0
      )
      .to(
        link.current,
        {
          x: 0,
          ease: 'power1.inOut',
          duration: 2.5,
        },
        2
      )
      .to(
        marquee,
        {
          x: -2000,
          repeat: -1,
          ease: 'power1.out',
          delay: 5,
          duration: 60,
        },
        2
      );
  }, []);

  return (
    <Box ref={main}>
      <Marquee />
      <Box
        ref={background}
        component="section"
        sx={{
          position: 'relative',
          paddingTop: 10,
          paddingBottom: 16,
          backgroundImage: `url(${photographerBg.src})`,
          backgroundSize: {
            xs: 'cover',
            md: '120%',
          },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {
            md: 'top',
          },
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 5 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: 'white',
              fontSize: 32,
              textAlign: 'center',
              marginBottom: 3,
              fontWeight: 700,
            }}
            className={noto_sans_tc.className}
            ref={title}
          >
            精選攝影師
          </Typography>

          <Box pb={3} ref={photographerList}>
            <Swiper
              freeMode={true}
              modules={[FreeMode]}
              spaceBetween={50}
              slidesPerView={3}
              wrapperTag="ul"
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {photographers.map((card) => (
                <SwiperSlide tag="li" key={card.id}>
                  <PhotographerCard
                    name={card.name}
                    location={card.location}
                    rate={card.rate}
                    catagories={card.catagories}
                    price={card.price}
                    img_url={card.img_url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <Link
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                display: 'flex',
                alignItems: 'center',
              }}
              underline="none"
              className={noto_sans_tc.className}
              href="/"
              ref={link}
            >
              瀏覽更多
              <EastIcon sx={{ color: 'white', marginLeft: 1.5 }} />
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
