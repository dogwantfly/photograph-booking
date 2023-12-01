import { Noto_Sans_TC, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const noto_sans_tc = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const themeOptions = {
  palette: {
    primary: {
      main: '#1F1300',
    },
    secondary: {
      main: '#EA507B',
    },
    skin: {
      main: '#F1E9E1',
    },
    grey: {
      300: '#F7F7F7',
      400: '#E9E9E9',
      500: '#D4D4D4',
      600: '#9F9F9F',
      700: '#666666',
      800: '#333333',
      900: '#1D1D1D',
    },
  },
  typography: {
    fontFamily: [
      noto_sans_tc.style.fontFamily,
      inter.style.fontFamily,
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    title: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.125rem',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.125rem',
    },
    button_bold: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    button_sm: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
  },
}

const theme = createTheme(themeOptions);

export default theme;