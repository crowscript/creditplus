import '../styles/root.css';
import '../styles/fonts.css';
import NormalizeStyles from '../components/styles/Normalize.styled'
import GlobalStyles from '../components/styles/Base.styled'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from '../components/Layout';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Gotham',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
