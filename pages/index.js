import styled from "styled-components";
import Card from '../components/card';
import { createClient } from 'contentful'
import { Container, DivFull, ScreenSize } from '../components/styles/Global.styled';

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

const HeaderTitle = styled.h2`
  font: var(--font-style-normal) normal var(--font-weight-bold) var(--font-size-30)/var(--line-spacing-36) var(--font-family-gotham);
  color: var(--secondary);
  color: var(--secondary);
  text-align: center;

  @media ${ScreenSize.tablet} { 
    font: var(--font-style-normal) normal var(--font-weight-bold) var(--font-size-48)/68px var(--font-family-gotham);
    letter-spacing: var(--character-spacing--1-44);
  }
`;

const HeaderCareer = styled.div`
  padding: 6.25rem 0 3.75rem 0;
  background: var(--gray-75);
  width: 100%;
`;

const ParagraphDesc = styled.p`
  font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-14)/var(--line-spacing-20) var(--font-family-gotham);
  letter-spacing: var(--character-spacing--0-28);
  color: var(--primary-600-base);
  text-align: center;
  margin-bottom: var(--line-spacing-18);

  @media ${ScreenSize.tablet} {
    font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-16)/var(--line-spacing-24) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-32);
  }  
`;

const ResultsSection = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export default function Home({jobs}) {
  // console.log(jobs);
  const jobsLength = jobs.length ?? 0;

  return (
    <DivFull> 
      <HeaderCareer>
        <Container>
          <ParagraphDesc>
            {jobsLength} offene Stellen bei Creditplus 
          </ParagraphDesc>
   
          <HeaderTitle>
            Hier beginnt deine Zukunft
          </HeaderTitle>
        </Container>
      </HeaderCareer>  

      <ResultsSection>
        <Container>
          {jobs.map(job => (
            <Card key={job.sys.id} job={job} />
          ))}
        </Container>
      </ResultsSection>
    </DivFull>
  )
}
