import styles from '../styles/Home.module.css';
import HeadTag from './headtag';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <HeadTag />
        <Header />
        <main className={styles.main}>
            { children }
        </main>
        <Footer />
    </div> 
  )
}