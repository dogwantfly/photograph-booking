'use client'

import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Inter, Oswald } from 'next/font/google';
import Image from 'next/image';

import BannerSwiperSet from '@components/Banner/BannerSwiperSet'

import customer_1 from '@images/banner/customer-1.jpg'
import customer_2 from '@images/banner/customer-2.jpg'
import customer_3 from '@images/banner/customer-3.jpg'

const inter = Inter({
  weight: ['400'],
  subsets: ['latin']  
})

const oswald = Oswald({
  weight: ['500'],
  subsets: ['latin']  
})

const customerImgSet = [customer_1, customer_2, customer_3]

export default function Banner() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const getCustomerImgWidth = () => {
    if (matchesSm) {
      return 32;
    } else {
      return 24;
    }
  };

  return (
    <Box 
      component="section"
      style={{
        background: 'linear-gradient(#f7f7f700, #f7f7f7, #f7f7f7, #f7f7f7)',
        height: 'calc(100vh - 112px)'
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: {
            sm: '4.5rem'
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid lg={4}>
            <Box
              component="div"
              sx={{
                position: 'relative',
                zIndex: 10,
                width: {
                  xs: '100vw',
                  md: 450
                },
                height: {
                  xs: '100%',
                  md: 'auto'
                },
                mt: {
                  xs: '15rem',
                  md: '18rem'
                },
                pt: {
                  xs: '7.5rem',
                  md: 0
                },
                pl: {
                  sm: '6rem',
                  md: 0
                },
                left: {
                  sm: '-4.5rem',
                  md: 0
                }
              }}
              style={{
                background: 'linear-gradient(#f7f7f700, #f7f7f7, #f7f7f7, #f7f7f7)',
              }}
            >
              <Box 
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: {
                    xs: '0.5rem',
                    lg: '0.75rem'
                  }
                }}
              >
                <Box>
                  {customerImgSet.map((customerImg, index) => {
                    return (
                      <Image
                        src={customerImg}
                        key={index}
                        alt={`customerImg-${index}`}
                        style={{
                          width: getCustomerImgWidth(),
                          height: getCustomerImgWidth(),
                          objectFit: 'cover',
                          position: 'relative',
                          zIndex: `${(index + 1) * -1}`,
                          transform: `translateX(-${index * 33.3}%)`,
                          borderRadius: '3.125rem',
                          border: '1px solid #F7F7F7'
                        }}
                      />
                    )
                  })}
                </Box>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontSize: {
                      xs: '0.875rem',
                      md: '1rem'
                    },
                    ml: '-0.75rem'
                  }}
                >
                  累積 
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: 'inherit',
                      mx: '0.2rem'
                    }}
                  >
                    36,128 
                  </Typography>
                  份客戶透過找到心儀的攝影師
                </Typography>
              </Box>
              <Typography 
                variant="h1"
                component="h2"
                sx={{
                  fontSize: {
                    xs: '2rem',
                    md: '3rem'
                  },
                  mb: {
                    xs: '0.5rem',
                    lg: '0.75rem'
                  }
                }}
              >
                找到你的拍照神隊友
              </Typography>
              <Typography 
                variant="h2"
                component="p"
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    md: '2rem'
                  },
                  mb: {
                    xs: '2rem',
                    lg: '4rem'
                  }
                }}
              >
                超過
                <Typography
                  variant="h2"
                  component="span"
                  fontWeight="medium"
                  sx={{
                    fontFamily: oswald.style.fontFamily,
                    fontSize: 'inherit',
                    mx: '0.2rem'
                  }}
                >
                  50,000
                </Typography>
                位攝影師供您挑選
              </Typography>
              <Button 
                href="#"
                variant='contained'
                color='primary'
                sx={{
                  py: {
                    xs: '0.75rem',
                    md: '1rem'
                  },
                  pl: {
                    xs: '1.5rem',
                    md: '2.5rem'
                  },
                  pr: {
                    xs: '1rem',
                    md: '1.5rem'
                  },
                  fontSize: {
                    xs: '1rem',
                    md: '1.125rem'
                  },
                  borderRadius: '1rem',
                  '&:hover': {
                    background: 'linear-gradient(270deg, #EA507B 0%, #DD2D2D 100%)'
                  },
                  '&:hover .MuiSvgIcon-root': {
                    color: 'secondary.main'
                  }
                }}
              >
                查看熱門攝影師
                <EastIcon 
                  sx={{
                    bgcolor: '#fff',
                    color: 'primary.main',
                    width: {
                      xs: '1rem',
                      md: '1.5rem'
                    },
                    height: {
                      xs: '1rem',
                      md: '1.5rem'
                    },
                    fontSize: 24,
                    borderRadius: '50%',
                    ml: {
                      xs: '1rem',
                      md: '2rem'
                    },
                    p: '0.25rem',
                  }}
                />
              </Button>
            </Box>
          </Grid>
          <Grid
            lg={7}
            mdOffset={1}
          >
            <BannerSwiperSet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
