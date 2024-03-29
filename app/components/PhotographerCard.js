'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Noto_Sans_TC, Inter } from 'next/font/google';
import * as theme from '@components/ThemeRegistry/theme';

const black_card_text = theme.gradient.black_card_text;

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function PhotographerCard({
  name,
  location,
  rate,
  catagories,
  price,
  img_url,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  function addFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: '0.75rem',
      }}
    >
      <Image
        alt={img_url}
        src={img_url}
        width={319}
        height={424}
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '3 / 4',
          objectFit: 'cover',
          display: 'block',
        }}
        priority={true}
      />

      <CardContent
        sx={{
          p: 0,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            position: 'absolute',
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              color: 'white',
              borderLeft: '2px solid white',
              fontWeight: 700,
              pl: 1.5,
            }}
            className={noto_sans_tc.className}
          >
            {location}
          </Typography>
        </Box>
        <CardActionArea
          component='a'
          href='/'
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          sx={{
            pt: 7,
            pb: 1,
            background: black_card_text,
            p: 2,
            color: 'white',
            position: 'absolute',
            zIndex: 3,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 1.5,
            }}
          >
            <Typography
              variant='h3'
              component='h3'
              sx={{
                fontSize: 18,
              }}
              className={noto_sans_tc.className}
            >
              {name}{' '}
            </Typography>
            <StarIcon
              sx={{
                marginLeft: 1.5,
                marginRight: 1,
                fontSize: 16,
              }}
            />

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.0175rem',
              }}
              className={noto_sans_tc.className}
            >
              {rate.toFixed(1)}
            </Typography>
          </Box>

          <Stack
            direction='row'
            spacing={1}
            flexWrap='nowrap'
            mb={1.5}
            sx={{
              overflowX: 'hidden',
            }}
          >
            {catagories.map((item, index) => (
              <Chip
                label={item}
                key={index + item}
                sx={{
                  fontSize: 14,
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '.MuiChip-label': {
                    p: '0px 8px',
                  },
                  borderRadius: '4px',
                  height: 'auto',
                }}
                className={noto_sans_tc.className}
              />
            ))}
          </Stack>
          <Box display='flex'>
            <Box className={inter.className}>
              NT$ {price.toLocaleString('en-US')}{' '}
            </Box>
            <Typography>/ 小時</Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions
        sx={(theme) => ({
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 3,
          '&:hover .MuiSvgIcon-root': {
            color: theme.palette.secondary.main,
          },
        })}
      >
        <Button variant='text' onClick={addFavorite} sx={{ minWidth: 0 }}>
          <FavoriteIcon
            sx={(theme) => ({
              color: isFavorite ? theme.palette.secondary.main : 'white',
            })}
          />
        </Button>
      </CardActions>
    </Card>
  );
}
