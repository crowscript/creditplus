import '../styles/root.css';
import '../styles/fonts.css';
import '../styles/normalize.css';
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from '../components/Layout';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Gotham',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 374,
      md: 767,
      lg: 1439,
    },
  },
});


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
