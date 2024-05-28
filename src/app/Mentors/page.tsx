import React from 'react'
import SearchBar from '../components/Searchbar'
import {getAllMentors} from '../lib/data'
import { Container, SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

const MentorsPage = async()  => {
const mentors = await getAllMentors()
console.log("getting:", mentors);
  return (
    <>
    <SearchBar/>
    <Container mt={8}maxW={'9xl'}>
    <SimpleGrid  spacing={4}columns ={[1,1,5]}>
      {mentors.map((mentor) => (
<div key={mentor.id}>
<Card mentor={mentor}/>
</div>
      ))}
    </SimpleGrid>
   </Container>
    </>
  )
}

export default MentorsPage