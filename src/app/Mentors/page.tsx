import React, { Suspense } from 'react'
import SearchBar from '../components/Searchbar'
import { getAllMentors } from '../lib/data'
import { Container, SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'
import Loading from './loading'

const gettingMentors = async () => {
  const res = await getAllMentors()
  return res
}

const MentorsPage = async () => {
  const mentors = await JSON.parse(JSON.stringify(await gettingMentors()))

  return (
    <>
      <SearchBar />

      <Container mt={8} maxW={'9xl'}>
        <Suspense fallback={<Loading />}>
          <SimpleGrid spacing={4} columns={[1, 1, 5]}>
            {mentors.map((mentor: any) => (
              <div key={mentor._id}>
                <Card mentor={mentor} />
              </div>
            ))}
          </SimpleGrid>
        </Suspense>
      </Container>
    </>
  )
}

export default MentorsPage
