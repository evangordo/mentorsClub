"use client";

import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Confirmation() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("firstName");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            color={"green.400"}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
          >
            Hi {user}, Welcome to the Mentor&apos;s Club!
            <br />
            <Text as={"span"} color={"grey"}>
              Log in to continue!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Your signup was successful. We&apos;re excited to have you on board.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              <Link href="Login">Log in</Link>
            </Button>

            <Box></Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
