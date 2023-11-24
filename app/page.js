import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import PhotographerCard from '@/app/components/PhotographerCard';
import FAQ from '@/app/components/FAQ';
import Marquee from '@/app/components/Marquee';
import { Noto_Sans_TC } from 'next/font/google';
import Image from 'next/image';
import photographerBg from '../public/phorographer-bg.png';
import EastIcon from '@mui/icons-material/East';

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400','700'],
});

const photographerData = [
  {
    name: '葉葉',
    location: '台北',
    rate: 5.0,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 1500,
    id: 1,
  },
  {
    name: '周周',
    location: '台南',
    rate: 5.0,
    catagories: ['人像攝影', '旅遊拍攝', '風格街拍','活動紀錄'],
    price: 1200,
    id: 2,
  },
  {
    name: '周周',
    location: '台中',
    rate: 5.0,
    catagories: ['旅遊拍攝','人像攝影', '風格街拍'],
    price: 2000,
    id: 3,
  },
  {
    name: '周周',
    location: '高雄',
    rate: 5.0,
    catagories: ['風格街拍','旅遊拍攝','商業攝影'  ],
    price: 2000,
    id: 4,
  },
];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <Box
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
              fontWeight: 700
            }}
            className={noto_sans_tc.className}
          >
            精選攝影師
          </Typography>

          <Grid container rowSpacing={3} columnSpacing={3} component="ul" pb={3}>
            {photographerData.map((card) => (
              <Grid
                sm={6}
                md={3}
                key={card.id}
                sx={{
                  margin: '0 auto',
                }}
                component="li"
              >
                <PhotographerCard
                  name={card.name}
                  location={card.location}
                  rate={card.rate}
                  catagories={card.catagories}
                  price={card.price}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{
            display: 'flex',
            justifyContent: 'end'
          }}>
          <Link
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center'
            }}
            underline='none'
            className={noto_sans_tc.className}
            href="/"
          >
            瀏覽更多
            <EastIcon sx={{ color: 'white', marginLeft: 1.5}} />
          </Link>
          </Box>
        </Container>
      </Box>

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
            paddingY: 6,
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
              src="/img_fag_l.png"
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
              src="/img_faq_r.png"
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
              fontWeight: 700
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
                  paddingTop: 5,
                  paddingRight: 5,
                  maxWidth: '440px',
                }}
              >
                <Image
                  alt="faq-image"
                  src="/faq-image.png"
                  width="440"
                  height="600"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    aspectRatio: '3 / 4',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <FAQ />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
