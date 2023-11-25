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
import { Noto_Sans_TC } from 'next/font/google';

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function PhotographerCard({
  name,
  location,
  rate,
  catagories,
  price,
  img_url
}) {
  const theme = {
    secondary: 'rgba(234, 80, 123, 1)',
  };
  const [isFavorite, setIsFavorite] = useState(false);
  function addFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Card
      sx={{
        position: 'relative',
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
          padding: 0,
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
            padding: 2,
            position: 'absolute',
            zIndex: 2
          }}
        >
          <Typography
            sx={{
              color: 'rgba(31, 19, 0, 1)',
              borderLeft: '2px solid rgba(31, 19, 0, 1)',
              fontWeight: 700,
              paddingLeft: 1.5,
            }}
            className={noto_sans_tc.className}
          >
            {location}
          </Typography>
        </Box>
        <CardActionArea
        component="a"
        href="/"
        sx={{
          width: '100%',
          height: '100%'
        }}
      /> 
        <Box
          sx={{
            paddingTop: 7,
            paddingBottom: 1,
            background:
              'linear-gradient(180deg, rgba(31, 19, 0, 0) 0%, #1F1300 100%)',
            padding: 2,
            paddingRight: 0,
            color: 'white',
            position: 'absolute',
            zIndex: 3,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 1.5,

          }}>
          <Typography
            variant="h3"
            component="h3"
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
                fontSize: 16
              }}
            />
            
            <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700
            }}
            className={noto_sans_tc.className}
          >
            {rate.toFixed(1)}
          </Typography>
          </Box>
         
          <Stack direction="row" spacing={1} flexWrap="nowrap" mb={1.5} sx={{ 
            overflowX: 'auto',

            '&::-webkit-scrollbar': {
            display: 'none'
          }
          }}>
            {catagories.map((item, index) => (
              <Chip
                label={item}
                key={index + item}
                sx={{
                  fontSize: 14,
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '.MuiChip-label': {
                    padding: '0px 8px'
                  },
                  borderRadius: '4px',
                  height: 'auto'
                }}
                className={noto_sans_tc.className}
              />
            ))}
          </Stack>
          <Typography className={noto_sans_tc.className}>
            NT$ {price.toLocaleString("en-US")} / 小時
          </Typography>
        </Box>
      </CardContent>
     
      <CardActions
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 3,
          '&:hover .MuiSvgIcon-root': {
            color: theme.secondary,
          },
        }}
      >
        <Button variant="text" onClick={addFavorite} sx={{ minWidth: 0 }}>
          <FavoriteIcon
            sx={{ color: isFavorite ? theme.secondary : 'white' }}
          />
        </Button>
      </CardActions>
    </Card>
  );
}
