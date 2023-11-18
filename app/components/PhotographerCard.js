import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function PhotographerCard({
  name,
  location,
  rate,
  catagories,
  price,
}) {
  return (

    <Card
      sx={{
        position: 'relative',
      }}
    >
      <Image
        alt="Random image"
        src="/photographer-card-1.png"
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
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <FavoriteBorderIcon />
        </Box>

        <Box>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            sx={{
              fontSize: 18,
            }}
          >
            {name} <StarIcon sx={{
              marginRight: 1
            }} />
            {rate}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {catagories.map((item, index) => (
              <Chip
                label={item}
                key={index + item}
                sx={{
                  fontSize: 14,
                }}
              />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            NT ${price} / 小時
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
