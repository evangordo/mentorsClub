'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'

import mentorsClub from '../assets/mentor.png'
import { ReactNode } from 'react'
import Image from './Image'

export default function Footer() {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >

        <Image src={mentorsClub} boxSize={24} alt='memtorsClub' />
        <Stack direction={'row'} spacing={6}>
          <Box as='a' href={'#'}>
            Home
          </Box>
          <Box as='a' href={'#'}>
            About
          </Box>
          <Box as='a' href={'#'}>
            Blog
          </Box>
          <Box as='a' href={'#'}>
            Contact
          </Box>
        </Stack>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© Mentors Club. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  )
}
