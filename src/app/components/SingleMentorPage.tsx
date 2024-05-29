import React from 'react';
import {
  Box,
  Heading,
  Link,
 
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
// import Image from './Image';
import Image from 'next/image';
interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
  img: string
}



// export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//       <Image
//         borderRadius="full"
//         boxSize="40px"
//         src={`https://mentorsclub.s3.eu-north-1.amazonaws.com/${props.img}`}
//         alt={`Avatar of `}
//       />
//       <Text fontWeight="medium">{props.name}</Text>
//       <Text>—</Text>
//       <Text>{props.date.toLocaleDateString()}</Text>
//     </HStack>
//   );
// };



interface SingleMentor{
    firstName: string,
    career: string,
    mentoringTopics: string,
    about: string
    industry: string
    img: string
    
}
const SingleMentorPage = ({firstName, career, mentoringTopics, about, industry, img}: SingleMentor) => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Mentor {firstName}</Heading>
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
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                // borderRadius="lg"
                width={'400'}
                height={'24'}
                src={
                   img
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
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
        
        <Tag  alignContent={'start'} variant='solid'  colorScheme='green'>
          {industry}
    </Tag>
         
            <Heading textDecoration="none" _hover={{ textDecoration: 'none' }}>
             {career}
            </Heading>
         
       
          <Text
            as="p"
            marginTop="2"
            // color={useColorModeValue('gray.400', 'gray.200')}
            fontSize="lg">
       {about}
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
     
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Mentoring Topics</Heading>
        <Text as="p" fontSize="lg">
        {mentoringTopics}
        </Text>
        {/* <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text> */}
      </VStack>
    </Container>
  );
};

export default SingleMentorPage;