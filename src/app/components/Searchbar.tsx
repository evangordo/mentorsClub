"use client";
import React from 'react';
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
        <Heading color={'green.400'} textAlign={'center'} mb={4}>
          Find your mentor!
        </Heading>
        <InputGroup borderRadius={5} bg="white" size="lg">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.600" />
          </InputLeftElement>
          <Input
            type="text"
            color={"grey"}
            placeholder="Query..."
            _placeholder={{ color: "grey" }}
            border="1px solid #949494"
          />
          <Select placeholder='Industry'>
            <option value='technology'>Technology</option>
            <option value='entertainment'>Entertainment</option>
            <option value='sports'>Sports</option>
            <option value='healthcare'>Healthcare</option>
            <option value='finance'>Finance</option>
            <option value='education'>Education</option>
            <option value='manufacturing'>Manufacturing</option>
            <option value='realestate'>Real Estate</option>
            <option value='hospitality'>Hospitality</option>
            <option value='agriculture'>Agriculture</option>
            <option value='automotive'>Automotive</option>
            <option value='legal'>Legal Services</option>
            <option value='marketing'>Marketing and Advertising</option>
            <option value='transportation'>Transportation</option>
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

export default SearchBar;
