import { createClient } from 'contentful';
import styled from "styled-components";
import { Container, Container930, ContainerNarrow, DivFull, ScreenSize, ListUnstyled } from '../components/styles/Global.styled';
import Card from '../components/card';
import SelectFilter from '../components/selectfilter';
import Pagination from '../components/pagination';
import { useEffect, useState } from 'react';

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
  margin-bottom: var(--line-spacing-24);

  @media ${ScreenSize.tablet} { 
    font: var(--font-style-normal) normal var(--font-weight-bold) var(--font-size-48)/68px var(--font-family-gotham);
    letter-spacing: var(--character-spacing--1-44);
    margin-bottom: var(--line-spacing-30);
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
  margin-bottom: var(--line-spacing-12);

  @media ${ScreenSize.tablet} {
    font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-16)/var(--line-spacing-24) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-32);
    // margin-bottom: var(--line-spacing-18); In design, line-height is not correct
    margin-bottom: 0;
  }  
`;

const ResultsSection = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export default function Home({jobs}) {
  // console.log(jobs);
  const jobsLength = jobs.length ?? 0;
  const [filterJobs, setFilteredJobs] = useState(jobs);
  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [department, setDepartment] = useState('')

  const handleSelected = value => {
    if (value?.type == 'city') {
      const filteredCity = jobs.filter(j => {
        if (department && !type) {
          return j.fields.department.fields?.title === department && j.fields.locations.find(l => l.fields.city === value.city)
        }
        if (department && type) {
          return j.fields.department.fields?.title === department && j.fields.type.fields?.title === type && j.fields.locations.find(l => l.fields.city === value.city)
        }
        return type ? j.fields.type.fields?.title === type && j.fields.locations.find(l => l.fields.city === value.city) : 
        j.fields.locations.find(l => l.fields.city === value.city)
      })
      setCity(value.city)
      setFilteredJobs(filteredCity)
    }
    if (value?.type == 'type') {
      const filteredType = jobs.filter(j => {
        if (department && !city) {
          return j.fields.department.fields?.title === department && j.fields.type.fields?.title === value.title
        }
        if (department && city) {
          console.log('dep and city')
          return j.fields.department.fields?.title === department && j.fields.type.fields?.title === value.title && j.fields.locations.find(l => l.fields.city === city)
        }
        return city ? j.fields.type.fields?.title === value.title && j.fields.locations.find(l => l.fields.city === city) :  j.fields.type.fields?.title === value.title
      })
      setType(value.title)
      setFilteredJobs(filteredType);
    }
    if (value?.type == 'department') {
      const filteredType = jobs.filter(j => {
        if (city && !type) {
          return j.fields.locations.find(l => l.fields.city === city) && j.fields.department.fields?.title === value.title
        }
        if (city && type) {
          return j.fields.department.fields?.title === value.title && j.fields.type.fields?.title === type && j.fields.locations.find(l => l.fields.city === city)
        }
        return type ? j.fields.department.fields?.title === value.title && j.fields.type.fields?.title === type : j.fields.department.fields?.title === value.title
      });
      setDepartment(value.title)
      setFilteredJobs(filteredType);
    }
  };

  return (
    <DivFull> 
      <HeaderCareer>
        <Container>
          <ContainerNarrow>
            <ParagraphDesc>
              {jobsLength} offene Stellen bei Creditplus 
            </ParagraphDesc>
            <HeaderTitle>
              Hier beginnt deine Zukunft
            </HeaderTitle>
          </ContainerNarrow>
          <Container930>
            <SelectFilter jobs={jobs} handleSelected={handleSelected} />
          </Container930>
        </Container>
      </HeaderCareer>  
      <ResultsSection>
        <Container>
          <ContainerNarrow>
            <ListUnstyled>
              {filterJobs.map(job => (
                  <Card key={job.sys.id} job={job} />
              ))}
            </ListUnstyled>
          </ContainerNarrow>
        </Container>
      </ResultsSection>
      <Container>
        <ContainerNarrow>
          <Pagination />
        </ContainerNarrow>
      </Container>
    </DivFull>
  )
}
