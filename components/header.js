import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

const Header = () => {
    return (
        <header className={`${styles.mainHeader} ${styles["m-0"]}`} >
            <Grid container columns={{ xs: 4, md: 6, lg: 12 }} maxWidth="lg" margin="auto">
                <Grid item xs={12} md={3} lg={6}>
                    <Item>
                        <Navbar />
                    </Item>
                </Grid>
                <Grid item xs={12} md={3} lg={6}>
                </Grid>
            </Grid>
        </header>
    );
  }
   
  export default Header;