import React, { Suspense } from 'react'
import SearchBar from '../components/Searchbar'
import {getAllMentors} from '../lib/data'
import { Container, SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'
import Loading from './loading'

const MentorsPage =  async ()  => {
const mentors = await getAllMentors()


  return (
    <>
    <SearchBar/>
    <Container mt={8}maxW={'9xl'}>
      <Suspense  fallback={<Loading/>}>
    <SimpleGrid  spacing={4}columns ={[1,1,5]}>
      {mentors.map((mentor) => (
<div key={mentor.id}>
<Card mentor={mentor}/>
</div>
      ))}
     

    </SimpleGrid>
    </Suspense>
   </Container>
    </>
  )
}

export default MentorsPage;