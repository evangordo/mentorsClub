'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react'
// import Image from "next/image";
import Image from './Image'
import linkedin from '../assets/linkedin.jpeg'
import Activity from './Activity'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface MentorProps {
  firstName: string
  career: string
  _id: string
  industry: string
  lastName: string
  img: string
}

export default function Card({ mentor }: { mentor: MentorProps }) {
  const fixedToString = mentor._id.toString()
  return (
    <Center py={12}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Box
          _hover={{
            background: 'white',
            color: 'green.400',
          }}
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,

              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={mentor.img}
              alt='#'
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Link href={`/Mentors/${fixedToString}`}>
              <Text
                align='center'
                color={'gray.500'}
                fontSize={'sm'}
                textTransform={'uppercase'}
              >
                {mentor.industry}
              </Text>
              <Flex align='center'>
                <Heading
                  p={2}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  fontWeight={500}
                  whiteSpace='nowrap'
                >
                  {mentor.firstName} {mentor.lastName}
                </Heading>
                <Activity />
              </Flex>

              <Text fontWeight={800} fontSize={'xl'}>
                {mentor.career}
              </Text>
            </Link>
          </Stack>
        </Box>
      </motion.div>
    </Center>
  )
}
