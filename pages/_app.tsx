import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';

// PASTE THE INSTAGRAM COLORS HERE
const theme = createTheme({
  primaryColor: 'bordeaux',
  colors: {
    // Deep Red / Wine color (Replace with their brand color)
    bordeaux: [
      '#F3EAEC', '#E1C4C8', '#CF9CA6', '#BE7483', '#AD4C61', 
      '#A3364D', '#911D36', '#7A132A', '#630B20', '#4E0617'
    ],
    // Gold / Luxury accent
    gold: [
      '#FBF8E6', '#F3ECC3', '#EBDF9F', '#E2D27A', '#DAC65A', 
      '#D4BE43', '#AA9731', '#7F7123', '#554B16', '#2B250A'
    ],
  },
  fontFamily: 'Georgia, serif', // Classy serif font for wine
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Component {...pageProps} />
    </MantineProvider>
  );
}