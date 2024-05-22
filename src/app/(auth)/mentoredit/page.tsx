'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Textarea,
  Select,
  RadioGroup,
  Radio
} from '@chakra-ui/react'

import {register} from '../../lib/actions'
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


import { useState } from 'react'
import { Editor } from "primereact/editor";

import { SmallCloseIcon } from '@chakra-ui/icons'

export default function UserProfileEdit() {

  const router = useRouter();
  const [state, formAction] = useFormState(register, undefined);


  useEffect(() => {
    state?.success && router.push("/confirmartion");
  }, [state?.success, router]);

  // function onChangeHandler(event) {
  //   const { name, value } = event.target;
  //   setCompanValues((prevEntry) => ({
  //     ...prevEntry,
  //     [name]: value,
  //   }));
  // }

  // function onClear() {
  //   setCompanValues(initialState);
  //   // removes the state on cancel from local
  //   localStorage.removeItem("companyValues");

  //   router.push("/");
  // }

  // function onEditorChange(e) {
  //   // adding this so it doesnt show the <p> tags on the client
  //   const textOnly = e.htmlValue.replace(/<\/?[^>]+(>|$)/g, "");
  //   setCompanValues((prevValues) => ({
  //     ...prevValues,
  //     jobDescription: textOnly,
  //   }));
  // }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
        Add Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>Add Icon</FormLabel>
          
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button  w="full">Change Icon</Button>
            </Center>
          </Stack>
          <FormControl  isRequired>
          <FormLabel>Your profession</FormLabel>
          <Input
            placeholder="E.g. Journalist @ The Irish Times"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        </FormControl>
        <FormLabel
        
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={5}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormLabel requiredIndicator>Your Industry</FormLabel>
          <Select>
  <option value='option1'>Technology</option>
  <option value='option2'>Entertainment</option>
  <option value='option3'>Sports</option>
  <option value='option1'>Healthcare</option>
  <option value='option2'>Finance</option>
  <option value='option3'>Education</option>
  <option value='option1'>Manufacturing</option>
  <option value='option2'>Real Estate</option>
  <option value='option3'>Hospitality</option>
  <option value='option1'>Technology</option>
  <option value='option2'>Agriculture</option>
  <option value='option3'>Automotive</option>
  <option value='option1'>Legal Services</option>
  <option value='option2'>Marketing and Advertising</option>
  <option value='option3'>Transportation</option>
</Select>
        {/* <FormLabel
        
        color="gray.700"
        _dark={{
          color: 'gray.50',
        }}>
   Mentoring topics
      </FormLabel>
      <Editor
                      color="black"
                      name="jobDescription"
                      id="jobDescription"
                      // value={companyValues.jobDescription}
                      // onTextChange={onEditorChange}
                      style={{ height: "320px" }}
                    /> */}
         <FormControl as="fieldset" isRequired>
            <RadioGroup defaultValue="mentee" >
                  <HStack spacing="24px">
                    <FormLabel>Im available for now:</FormLabel>
                  <Radio name="role" value="mentor">Yes</Radio>
                    <Radio name="role" value="mentee">No</Radio>
                  </HStack>
                </RadioGroup>
                </FormControl> 
        <Stack spacing={6} direction={['column', 'row']}>
      
          <Button
            bg={'green.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'green.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}