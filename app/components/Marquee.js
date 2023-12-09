import { Oswald } from 'next/font/google';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { marquee as data } from '../lib/placeholder-data';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Marquee() {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'hidden',
        gap: 4,
        alignItems: 'center',
        backgroundColor: theme.palette.macaron.main,
        py: 2,
        border: '1px solid rgba(212, 212, 212, 1)',
        borderRight: 0,
        borderLeft: 0,
      })}
      component="section"
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: 4,
          alignItems: 'center',
          transform: 'translateX(-100px)',
        }}
        data-marquee
      >
        {data.map((item) => (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: {
                xs: 2,
                md: 4,
              },
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
            key={item.slogan}
          >
            {item.icons.map((icon, icon_index) => (
              <Box
                key={icon_index}
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: {
                    xs: 2,
                    md: 4,
                  },
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: 24,
                      md: 48,
                    },
                    fontFamily: oswald.style.fontFamily
                  }}
                >
                  {item.slogan}
                </Typography>
                <Box
                  sx={{
                    width: {
                      xs: '24px',
                      lg: '48px',
                    },
                    height: {
                      xs: '24px',
                      lg: '48px',
                    },
                  }}
                >
                  <Image
                    alt={icon}
                    src={icon}
                    width={48}
                    height={48}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
