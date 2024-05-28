import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { getAllMentors } from '../lib/data'

const CollectionMentors = async () => {
  const mentors = await getAllMentors()

  return (
   <Container mt={8}maxW={'9xl'}>
    <SimpleGrid  spacing={4}columns ={[1,1,5]}>
    
    
    {mentors.map((mentor) => (
          <div key={mentor.firstName}>
            <Card mentor={mentor} />
          </div>
        ))}
    </SimpleGrid>

   </Container>
  )
}


export default CollectionMentors