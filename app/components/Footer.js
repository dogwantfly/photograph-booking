'use client';

import Image from 'next/image';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

  const getImgWidth = () => {
    if (matchesMd) {
      return 240;
    } else {
      return 120;
    }
  };
  const getImgHeight = () => {
    if (matchesMd) {
      return 64;
    } else {
      return 32;
    }
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[900],
        py: { xs: 3, md: 6 },
      })}
    >
      <Container
        sx={{
          position: 'relative',
          color: 'white',
          textAlign: 'center',
        }}
        component="footer"
      >
        <Box
          sx={{
            position: 'absolute',
            left: '24px',
            right: '24px',
            top: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                border: '1px solid white',
                borderRight: 0,
                borderBottom: 0,
                width: 12,
                height: 12,
                marginBottom: 'auto',
              }}
            />
            <Box
              sx={{
                border: '1px solid white',
                borderRight: 0,
                borderTop: 0,
                width: 12,
                height: 12,
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                border: '1px solid white',
                borderLeft: 0,
                borderBottom: 0,
                width: 12,
                height: 12,
                marginBottom: 'auto',
              }}
            />
            <Box
              sx={{
                border: '1px solid white',
                borderLeft: 0,
                borderTop: 0,
                width: 12,
                height: 12,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              xs: '120px',
              sm: '240px',
            },
            margin: '0 auto',
          }}
        >
          <Image
            alt="隨旅拍"
            src="/logo_light.svg"
            width={getImgWidth()}
            height={getImgHeight()}
            style={{ maxWidth: '100%' }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: 14,
          }}
        >
          Copyright © 2023 隨旅拍
        </Typography>
      </Container>
    </Box>
  );
}
