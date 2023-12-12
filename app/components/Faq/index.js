import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import FAQAccordion from '@/app/components/Faq/FAQ';
import { Noto_Sans_TC } from 'next/font/google';

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Faq() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'rgba(247, 247, 247, 1)',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 6,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
        >
          <Image
            alt="faq-bg-l"
            src="/img_fag_l.webp"
            width="616"
            height="744"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: -20,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Image
            alt="faq-bg-r"
            src="/img_faq_r.webp"
            width="320"
            height="320"
            style={{
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: 32,
            textAlign: 'center',
            marginBottom: 3,
            position: 'relative',
            zIndex: 5,
            fontWeight: 700,
          }}
          className={noto_sans_tc.className}
        >
          常見問題
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            position: 'relative',
            zIndex: 5,
          }}
        >
          <Grid
            md={6}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              justifyContent: 'end',
            }}
          >
            <Box
              sx={{
                pt: 5,
                pr: 5,
                maxWidth: '480px',
              }}
            >
              <Image
                alt="faq-image"
                src="/faq-image.webp"
                width="440"
                height="600"
                style={{
                  maxWidth: '100%',
                  aspectRatio: '3 / 4',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '0.75rem',
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <FAQAccordion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
