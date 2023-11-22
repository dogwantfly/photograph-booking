import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhotographerCard from '@/app/components/PhotographerCard';
import FAQ from '@/app/components/FAQ'
import Marquee from '@/app/components/Marquee';
import { Noto_Sans_TC } from 'next/font/google'

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['700']
});

const photographerData = [
  {
    name: '周周',
    location: '台北',
    rate: 5,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 2000,
    id: 1,
  },
  {
    name: '周周',
    location: '台北',
    rate: 5,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 2000,
    id: 2,
  },
  {
    name: '周周',
    location: '台北',
    rate: 5,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 2000,
    id: 3,
  },
  {
    name: '周周',
    location: '台北',
    rate: 5,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 2000,
    id: 4,
  },
];

export default function HomePage() {
  return (
    <>
    <Marquee />
    <Container component="section" sx={{ paddingTop: 10, paddingBottom: 16}}>
      <Typography variant='h3' component="h2" sx={{
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 3
      }} className={noto_sans_tc.className}>精選攝影師</Typography>
      <Grid container rowSpacing={3} columnSpacing={3} component="ul">
        {photographerData.map((card) => (
          <Grid sm={6} md={3} key={card.id} sx={{
            margin: '0 auto'
          }} component="li">
            <PhotographerCard 
              name={card.name}
              location={card.location}
              rate={card.rate}
              catagories={card.catagories}
              price={card.price} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <Box component="section" sx={{
      backgroundColor: 'rgba(247, 247, 247, 1)'
    }}>
    <Container sx={{
      paddingY: 6
    }}>
      <Typography variant='h3' component="h2" sx={{
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 3
      }} className={noto_sans_tc.className}>常見問題</Typography>
      <FAQ />
    </Container>
    </Box>
    </>
  );
}
