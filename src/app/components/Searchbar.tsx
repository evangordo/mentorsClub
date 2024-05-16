"use client";
import React from 'react'
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Container,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

 const SearchBar = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <InputGroup borderRadius={5} bg="white" size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            type="text"
            color={"grey"}
            placeholder="Search an area..."
            _placeholder={{ color: "grey" }}
            border="1px solid #949494"
          />
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