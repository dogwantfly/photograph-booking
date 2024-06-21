'use client';

import Box from '@mui/system/Box';
import Typography from "@mui/material/Typography";
import {useTheme} from '@mui/material/styles';

export default function IntroSection() {
  const theme = useTheme();

  return (
      <Box
        component="section"
        sx={{
          py: 10,
          position: 'relative'
        }}
      >
        <Box
          bgcolor={theme.palette.secondary.light}
          sx={{
            width: '416px',
            height: '500px',
            margin: '0 auto',
            borderRadius: '300px 300px 0 0',
          }}
        >
        </Box>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center'
        }}>
          <Typography
            component="h2"
            sx={{
              fontSize: '4.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              mb: 3
            }}
          >
            我們希望您獲得更多
          </Typography>
          <Typography
            component="h3"
            sx={{
              typography: 'title'
            }}
          >
            這不單單只是拍照攝影而已，因為我們始終把您的需求放在最前面
          </Typography>
        </Box>
      </Box>
  )
}
