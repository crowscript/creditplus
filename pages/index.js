import HeadTag from '../components/headtag';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import Footer from '../components/footer';
import Header from '../components/header';
import SelectSection from '../components/selectsection';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadTag />
      <Header />

      <main className={styles.main}>
        <div className={styles.headerCareer}>
          <p className={styles.description}>
            <span>56</span> offene Stellen bei Creditplus
          </p>
          <h2 className={styles.title}>
            Hier beginnt deine Zukunft
          </h2>

          <SelectSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
