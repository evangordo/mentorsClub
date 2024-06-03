'use client'
import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  VStack,

  Modal,
  ModalOverlay,
  ModalContent,
Button,
useDisclosure
} from '@chakra-ui/react'
import InlineComponent from './Calendly'

interface SingleMentor {
  firstName: string
  career: string
  mentoringTopics: string
  about: string
  industry: string
  img: string
  lastName: string
}
const SingleMentorPage = ({
  firstName,
  lastName,
  career,
  mentoringTopics,
  about,
  industry,
  img,
}: SingleMentor) => {
 
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container maxW={'7xl'} p='12'>
      <Heading as='h1'>
        {' '}
        {firstName} {lastName}
      </Heading>

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'
      >
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'
          >
            <div className='corners2'>
              <img
                alt=''
                height={230}
                width={482}
                src={img}
              />
            </div>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>

        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: '3', sm: '0' }}
        >
          <Flex>
            <Heading
              textDecoration='none'
              color={'green.400'}
              _hover={{ textDecoration: 'none' }}
            >
              About
            </Heading>
          </Flex>
          <Text
            as='p'
            marginTop='2'
            // color={useColorModeValue('gray.400', 'gray.200')}
            fontSize='lg'
          >
            {about}
          </Text>
          <Button onClick={onOpen}>Open Modal

<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
        <ModalContent>
          {/* <InlineComponent/> */}
</ModalContent>
</Modal>
</Button>

          <Text>Member since: new Date(2021-04-06T19:01:27Z)</Text>
        </Box>
      </Box>

      <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
        <Heading color={'green.400'} as='h2'>
          Mentoring Topics
        </Heading>
        <Text as='p' fontSize='lg'>
          {mentoringTopics}
        </Text>
      </VStack>
    </Container>
  )
}

export default SingleMentorPage
