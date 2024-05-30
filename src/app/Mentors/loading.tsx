import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Skeleton,
    SkeletonText,
    Container,
    SimpleGrid
  } from '@chakra-ui/react'  

export default function Loading() {
  return (
    <Container mt={8}maxW={'9xl'}>
    <SimpleGrid  spacing={4}columns ={[1,1,5]}>
    
    <ProductSimple/>
    <ProductSimple/>
    <ProductSimple/>
    <ProductSimple/>
    <ProductSimple/>
 
 
    </SimpleGrid>

   </Container>
  )
}











function ProductSimple() {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
       
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
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
          }}>
        <Skeleton
        height='200px'
     
        color='white'
      />
        </Box>
        <Stack pt={10} align={'center'}>
        <SkeletonText mt='4' noOfLines={1} spacing='1' skeletonHeight='1' />
                <SkeletonText mt='4' noOfLines={1} spacing='1' skeletonHeight='2' />
          <Stack direction={'row'} align={'center'}>
          <SkeletonText mt='4' noOfLines={1} spacing='1' skeletonHeight='2' />
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}