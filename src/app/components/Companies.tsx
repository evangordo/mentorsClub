'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Center,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}
import Image from './Image'

import google from '../assets/google.png'
import hubspot from '../assets/hubspot.png'
import dcu from '../assets/dcu.svg'
import times from '../assets/times.svg'
import salesforce from '../assets/salesforce.png'
import ryanair from '../assets/ryanair.svg'

export default function Companies() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>From Instiutions such as</Heading>
          <Text>Talk to professions from various companies across Ireland</Text>
        </Stack>
        <Center>
          <CompanyImages />
        </Center>
      </Container>
    </Box>
  )
}

const CompanyImages = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  })

  return (
    <Container maxW={'7xl'}>
      <Center>
        {isDesktop ? (
          <HStack mt={-12} spacing={{ base: 10, md: 10 }}>
            <Image alt='image' boxSize={40} src={google} />

            <Image alt='image' height={38} src={hubspot} />

            <Image alt='image' height={64} src={dcu} />

            <Image alt='image' height={30} src={times} />

            <Image alt='image' boxSize={60} src={ryanair} />
          </HStack>
        ) : (
          <SimpleGrid column={[2, 2, 5]}>
            <Image alt='image' boxSize={40} src={google} />

            <Image alt='image' height={38} src={hubspot} />

            <Image alt='image' height={64} src={dcu} />

            <Image alt='image' height={30} src={times} />

            <Image alt='image' boxSize={60} src={ryanair} />
          </SimpleGrid>
        )}
      </Center>
    </Container>
  )
}
