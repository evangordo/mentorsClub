import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { getAllMentors } from '../lib/data'




const gettingMentors = async () => {
  const res = await getAllMentors();
  return res;
};


const CollectionMentors = async () => {
  const mentors = await JSON.parse(JSON.stringify(await gettingMentors()));
  return (
   <Container mt={8}maxW={'9xl'}>
    <SimpleGrid  spacing={4}columns ={[1,1,5]}>
    
    
        {mentors.map((mentor: any) => (
          <div key={mentor.firstName}>
            <Card mentor={mentor} />
          </div>
        ))}
    </SimpleGrid>

   </Container>
  )
}


export default CollectionMentors