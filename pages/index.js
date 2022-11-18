import styles from '../styles/Home.module.css';
import SelectSection from '../components/selectsection';

export default function Home() {
  return (
    <div className={styles.headerCareer}>
      <p className={styles.description}>
        <span>56</span> offene Stellen bei Creditplus
      </p>
      <h2 className={styles.title}>
        Hier beginnt deine Zukunft
      </h2>

      <SelectSection />
    </div>
  )
}
