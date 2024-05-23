"use client";

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
  Textarea,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { updateUserProfile } from "../../lib/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ImagePicker from "@/app/components/ImagePicker";
import { SmallCloseIcon } from "@chakra-ui/icons";

export default function UserProfileEdit() {
  const router = useRouter();
  const [state, formAction] = useFormState(updateUserProfile, undefined);

  useEffect(() => {
    state?.success && router.push("/confirmation");
  }, [state?.success, router]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = localStorage.getItem("userEmail"); // Retrieve email from local storage
    formData.append("email", email);
    formAction(formData);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Add Profile
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="userName">
            <FormLabel>Your profile</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              {/* <ImagePicker label="" name="img" /> */}
            </Stack>
            <FormControl isRequired>
              <FormLabel>Your profession</FormLabel>
              <Input
                name="career"
                placeholder="E.g. Journalist @ The Irish Times"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
          </FormControl>
          <FormLabel
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About
          </FormLabel>
          <Textarea
            name="about"
            placeholder="you@example.com"
            rows={5}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormControl as="fieldset" isRequired>
            <RadioGroup name="available" defaultValue="true">
              <HStack spacing="24px">
                <FormLabel>I'm available for now:</FormLabel>
                <Radio value="true">Yes</Radio>
                <Radio value="false">No</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              type="submit"
              bg={"green.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "green.500",
              }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
