import React from 'react';
import {
  Box,
  Heading,

 
  Text,

  Tag,
  Flex,

  Container,
  VStack,
} from '@chakra-ui/react';
import ChakraImage from './Image';





interface SingleMentor{
    firstName: string,
    career: string,
    mentoringTopics: string,
    about: string
    industry: string
    img: string
    lastName: string
    

}
const SingleMentorPage = ({firstName, lastName, career, mentoringTopics, about, industry, img}: SingleMentor) => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1"> {firstName} {lastName}</Heading>
      
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
              <img
              alt=''
              // rounded={'lg'}
              height={230}
              width={482}
              // objectFit={'cover'}
              src={img}
            
              />
              </div>
  
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
            //   bgGradient={useColorModeValue(
            //     '(orange.600 1px, transparent 1px)',
            //     '(orange.300 1px, transparent 1px)'
            //   )}
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
             {career}
            </Heading>
         
            <Tag  m={2} variant='solid'  colorScheme='green'>
          {industry}
    </Tag>
    </Flex>
          <Text
            as="p"
            marginTop="2"
            // color={useColorModeValue('gray.400', 'gray.200')}
            fontSize="lg">
       {about}
          </Text>
          <Text>
       Member since:     new Date(2021-04-06T19:01:27Z)

</Text>
        </Box>
      </Box>
     
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Mentoring Topics</Heading>
        <Text as="p" fontSize="lg">
        {mentoringTopics}
        </Text>
     
      </VStack>
    </Container>
  );
};

export default SingleMentorPage;