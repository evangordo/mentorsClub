'use client'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import career from '../assets/career.jpg'
import Image from './Image'
import Link from 'next/link'
export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Mentor with Ireland&apos;s
            </Text>
            <br />
            <Text as={'span'} color={'green.400'}>
              leading professional&apos;s
            </Text>
          </Heading>

          <Text fontSize={'xl'} color={'black.500'}>
            The Mentors Club provides individuals with insights into their
            career interests and the opportunity to learn from Ireland&apos;s
            mentor&apos;s.{' '}
          </Text>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}
            >
              <Link href='/signup'> Get started</Link>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image alt='carer' src={career} />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
