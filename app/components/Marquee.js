'use client';

import { Oswald } from 'next/font/google';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { keyframes } from '@mui/system';

const marquee = keyframes`
0%   {
  transform: translateX(0);
}
100% {
  transform: translateX(calc(-100% - 2em))
}
`;

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500'],
});

export default function Marquee() {
  return (

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'hidden',
        gap: 4,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 245, 211, 1)',
        paddingY: 2,
        border: '1px solid rgba(212, 212, 212, 1)',
        borderRight: 0,
        borderLeft: 0
      }}
      component="section"
    >
      {[...new Array(5)].map((_, index) => (

        <Box
        sx={{
          display: 'flex',
        flexWrap: 'nowrap',
        gap: 4,
        alignItems: 'center',
        transform: 'translateX(-100px)',
        whiteSpace: 'nowrap',
        animation: `${marquee} 20s linear infinite`,
        }}
        key={index}
      > 
      <Typography
        variant="h3"
        sx={{
          fontSize: 48,

        }}
        className={oswald.className}
      >
        Capture the Journey, Freeze the Beauty
      </Typography>
      <Image
        alt="/marquee-icon-smile.png"
        src="/marquee-icon-smile.png"
        width={48}
        height={48}
      />
      <Typography
        variant="h3"
        sx={{
          fontSize: 48
        }}
        className={oswald.className}
      >
        Capture the Journey, Freeze the Beauty
      </Typography>
      <Image
        alt="/marquee-icon-smile.png"
        src="/marquee-icon-smile.png"
        width={48}
        height={48}
      />
      </Box>
      ))}
      
      
    </Box>
  );
}
