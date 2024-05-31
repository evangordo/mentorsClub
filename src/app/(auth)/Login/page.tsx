'use client'
import { login } from "../../lib/actions";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import Link from "next/link";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'

export default function SimpleCard() {
      const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
 if  (state?.success) {router.push("/")
  }
  }, [state?.success, router]);

    
  return (
    <Suspense fallback={
      <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    }>
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
        </Stack>
        <form action={formAction}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password'/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
             {state?.error}
      <Link href="/signup">
        {"Don't have an account?"} <b>Register</b>
       </Link>
              </Stack>
              <Button
              type="submit"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        </form>
      </Stack>
    </Flex>
    </Suspense>
  )
}