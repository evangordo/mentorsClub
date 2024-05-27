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
  Select,
} from "@chakra-ui/react";
import { Editor } from "primereact/editor";
import { updateUserProfile } from "../../lib/actions";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MenteeInfo() {
  const [goals, setGoals] = useState("");
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const router = useRouter();
  const [state, formAction] = useFormState(updateUserProfile, undefined);

  useEffect(() => {
    if (state?.success) {
      router.push("/confirmation");
    }
  }, [state?.success, router]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = localStorage.getItem("userEmail"); // Retrieve email from local storage
    formData.append("email", email);
    formData.append("goals", goals);
    formData.append("img", file);
    formAction(formData);
  };

  function onEditorChange(e) {
    // adding this so it doesnt show the <p> tags on the client
    const textOnly = e.htmlValue.replace(/<\/?[^>]+(>|$)/g, "");
    setGoals((prevValues) => ({
      ...prevValues,
      goals: textOnly,
    }));
  }

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
          <FormControl isRequired id="userName">
            <FormLabel>Your profile</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Input type="file" name="img" onChange={handleFileChange} />

              <FormControl isRequired>
                <FormLabel>Your industry</FormLabel>
                <Select name="industry">
                  <option value="Technology">Technology</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Sports">Sports</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="RealEstate">Real Estate</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Automotive">Automotive</option>
                  <option value="LegalServices">Legal Services</option>
                  <option value="MarketingandAdvertising">
                    Marketing and Advertising
                  </option>
                  <option value="Transportation">Transportation</option>
                </Select>
              </FormControl>
            </Stack>
            <HStack>
              <FormControl isRequired>
                <FormLabel>Your profession</FormLabel>
                <Input
                  name="career"
                  placeholder="E.g. Journalist @ The Irish Times"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                />
              </FormControl>
            </HStack>
          </FormControl>
          <FormLabel
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About you
          </FormLabel>
          <Textarea
            name="about"
            placeholder="Tell us about yourself"
            rows={5}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />

          <FormLabel>Your career goals</FormLabel>
          <Editor
            color="black"
            name="goals"
            id="goals"
            value={goals}
            onTextChange={(e) => setGoals(e.htmlValue)}
            style={{ height: "320px" }}
          />

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
