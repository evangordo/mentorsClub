"use client";
import React from 'react'
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Container,
  Heading,
  Select
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

 const SearchBar = () => {
  return (
    <>
      <Container mt={8} maxW={"3xl"}>
        <Heading color={'green.400'} textAlign={'center'}mb={4}>
          Find your mentor!
        </Heading>
        <InputGroup borderRadius={5} bg="white" size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            type="text"
            color={"grey"}
            placeholder="Query..."
            _placeholder={{ color: "grey" }}
            border="1px solid #949494"
          />
          <Select placeholder='Industry'>
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
          <InputRightAddon p={0} border="none">
            <Button
              size="lg"
              borderLeftRadius={0}
              borderRightRadius={3.3}
              border="1px solid #949494"
              color={"grey"}
            >
              Search
            </Button>
          </InputRightAddon>
        </InputGroup>
      </Container>
    </>
  );
};

export default SearchBar