'use client';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import { Box, Container, Typography, Fab, Grid, styled } from '@mui/material';

import LocationChip from '@/app/components/PhotographerList/LocationChip';

import PhotographerCard from '@/app/components/PhotographerCard';
import { photographers, locations } from '@/app/lib/placeholder-data';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledSwiperSlide = styled(SwiperSlide)(() => ({
  width: 'auto',
}));
const StyledFab = styled(Fab)(() => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}));

export default function PhotographersList() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(
          'https://firebasestorage.googleapis.com/v0/b/photograph-booking.appspot.com/o/images%2Fphotographer-list-banner.webp?alt=media&token=cda52a9e-9ea0-477c-906e-b0d28adba2b6'
        )`,
        }}
        sx={{
          height: {
            xs: '200px',
            md: '360px',
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            alignItems: 'end',
            height: '100%',
            paddingBottom: {
              xs: '3rem',
              md: '6rem',
            },
            justifyContent: {
              xs: 'center',
              md: 'start',
            },
          }}
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{
              color: 'white',
              marginBottom: 3,
              fontWeight: 700,
              fontSize: {
                xs: '2rem',
                md: '2.5rem',
              },
            }}
          >
            攝影師總覽
          </Typography>
        </Container>
      </Box>
      <Container
        maxWidth='xl'
        sx={{
          py: 6,
        }}
      >
        <Box sx={{ position: 'relative', mb: 6 }}>
          <Swiper
            freeMode={true}
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
            }}
            slidesPerView={'auto'}
            modules={[FreeMode, Navigation]}
            spaceBetween={16}
            wrapperTag='ul'
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {[...locations, ...locations, ...locations].map((location, i) => (
              <StyledSwiperSlide tag='li' key={i}>
                <LocationChip label={location.label} href={location.href} />
              </StyledSwiperSlide>
            ))}
          </Swiper>

          <StyledFab
            color='white'
            ref={navigationPrevRef}
            sx={{
              left: 0,
            }}
            aria-label='上一個'
          >
            <ArrowBackIosIcon />
          </StyledFab>
          <StyledFab
            color='white'
            ref={navigationNextRef}
            sx={{
              right: 0,
            }}
            aria-label='下一個'
          >
            <ArrowForwardIosIcon />
          </StyledFab>
        </Box>

        <Grid container spacing={2} justifyContent={'center'}>
          {photographers.map((card) => (
            <Grid item sm={6} md={4} lg={3} key={card.id}>
              <PhotographerCard
                name={card.name}
                location={card.location}
                rate={card.rate}
                catagories={card.catagories}
                price={card.price}
                img_url={card.img_url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
