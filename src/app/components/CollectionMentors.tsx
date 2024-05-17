import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function CollectionMentors() {
  return (
   <Container mt={8}maxW={'9xl'}>
    <SimpleGrid columns ={[1,1,5]}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </SimpleGrid>

   </Container>
  )
}
