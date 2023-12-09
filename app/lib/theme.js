'use client';

import { createTheme } from '@mui/material/styles';
import { Noto_Sans_TC, Inter } from 'next/font/google';

export const gradient = {
  pink_btn_bg: 'linear-gradient(270deg, #EA507B 0%, #DD2D2D 100%)',
  white_banner_text: 'linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, #F7F7F7 51.56%),linear-gradient(0deg, #1F1300, #1F1300)',
  white_header_bg: 'linear-gradient(180deg, #F7F7F7 50%, rgba(247, 247, 247, 0) 100%)',
  black_card_text: 'linear-gradient(180deg, rgba(31, 19, 0, 0) 0%, #1F1300 100%)',
};

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default createTheme({
  palette: {
    primary: {
      main: '#1F1300',
    },
    secondary: {
      main: '#EA507B',
      light: '#F1E9E1',
    },
    macaron: {
      main: 'rgba(255, 245, 211, 1)',
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
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h3: {
      fontSize: '1.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    title: {
      fontSize: '1.125rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.125rem',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
    button: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.125rem',
    },
    button_bold: {
      fontSize: '0.875rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
      fontWeight: 700,
    },
    button_sm: {
      fontSize: '0.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.125rem',
    },
  },
});
