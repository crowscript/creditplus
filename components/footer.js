import styles from '../styles/Home.module.css';
import Image from 'next/image';

const getCurrentYear = () => {
    return new Date().getFullYear();  
};

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <p>&copy; {getCurrentYear()} Creditplus Bank AG, Stuttgart</p>
        </footer>
    );
  }
   
  export default Footer;