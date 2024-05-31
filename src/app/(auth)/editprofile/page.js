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
import { EditUserProfile } from "../../lib/actions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMentor } from "@/app/lib/data";

export default function EditProfile({ session }) {
  const [mentoringTopics, setMentoringTopics] = useState("");
  const [file, setFile] = useState(null);

  const [userData, setUserData] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const router = useRouter();
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const email = session.user.id;
      const response = await getMentor(email);
      console.log("this is the response", response);

      setUserData(response);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (state?.success) {
      router.push("/confirmation");
    }
  }, [state?.success, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("mentoringTopics", mentoringTopics);
    formData.append("email", session.user.email);

    const result = await EditUserProfile(null, formData);
    setState(result);
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
          Edit Profile
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
                  // defaultValue={userData.career}
                  // _placeholder={{ color: "gray.500" }}
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
            About
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

          <FormLabel>Mentoring topic</FormLabel>
          <Editor
            color="black"
            name="mentoringTopics"
            id="mentoringTopics"
            value={mentoringTopics}
            onTextChange={(e) => setMentoringTopics(e.htmlValue)}
            style={{ height: "320px" }}
          />
          <FormControl as="fieldset" isRequired>
            <RadioGroup name="available" defaultValue="true">
              <HStack spacing="24px">
                <FormLabel>Im available for now</FormLabel>
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
