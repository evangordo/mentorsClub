import React from 'react';
import {
  Box,
  Heading,
  Text,
  Tag,
  Flex,
  Container,
  Stack,
  VStack,
  Skeleton, SkeletonCircle, SkeletonText
} from '@chakra-ui/react';



const Loading = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1"> 
      <Skeleton startColor='green.500' height='20px' />
      </Heading>
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
              
 <div className='corners2'>
 <Skeleton
        height='400px'
     
        fadeDuration={4}
      
        color='white'
      />
              </div>
  
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
        
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        
        
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
        
       
         <Flex>
            <Heading textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Skeleton startColor='green.500' height='20px' />
            </Heading>
         
            <Tag  m={2} variant='solid'  colorScheme='green'>
        
    </Tag>
    </Flex>
        
            <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>

       
        </Box>
      </Box>
     
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Mentoring Topics</Heading>
      
        <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
    
  
    
      </VStack>
    </Container>
  );
};

export default Loading;