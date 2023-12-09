import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
  return (

      <Container sx={{
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        my: {'xs': 3, 'md': 6}
      }}
      component="footer">
      <Box sx={{
        position: 'absolute',
        left: '24px',
        right:'24px',
        top: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-between'
}}>
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}>
  <Box sx={{
    border: '1px solid white',
    borderRight: 0,
    borderBottom: 0,
    width: 12,
    height: 12,
    marginBottom: 'auto'
  }}/>
  <Box sx={{
    border: '1px solid white',
    borderRight: 0,
    borderTop: 0,
    width: 12,
    height: 12
  }}/>
  </Box>
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}>
  <Box sx={{
    border: '1px solid white',
    borderLeft: 0,
    borderBottom: 0,
    width: 12,
    height: 12,
    marginBottom: 'auto'
  }}/>
  <Box sx={{
    border: '1px solid white',
    borderLeft: 0,
    borderTop: 0,
    width: 12,
    height: 12
  }}/>
  </Box>
</Box>
<Box sx={{
  width: {
    xs: '120px',
    sm: '240px'
  },
  margin: '0 auto'
}}>
<Image alt="隨旅拍" src="/logo_light.svg" width={240} height={64} sizes="(min-width: 768px) 240px 64px, 120px 32px" style={{ maxWidth: '100%' }}/>
</Box>

<Typography
  sx={{
    fontSize: 14,
  }}
>
  Copyright © 2023 隨旅拍
</Typography>
      </Container>
  );
}
