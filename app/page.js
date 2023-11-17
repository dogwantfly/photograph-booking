import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PhotographerCard from '@/app/components/PhotographerCard';

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
    <Container component="section">
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
  );
}
