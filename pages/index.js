import styles from '../styles/Home.module.css';
import SelectSection from '../components/selectsection';
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
  })

  const jobList = await client.getEntries({ content_type: "job" })

  return {
    props: {
      jobs: jobList.items,
    }
  }
}
export default function Home({jobs}) {
  console.log(jobs);
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
