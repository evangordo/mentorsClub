'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from '../Image';
import mentor from '../../assets/mentor.png';
import Link from 'next/link';
import { handleLogout } from "../../lib/actions";


interface UserProps {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  img: string;
  isAdmin: boolean;
}

interface SessionProps {
  user: UserProps;
  expires: string;
}
export default function Navbar({ session }:{ session: SessionProps}) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link href='/'>
            <Image src={mentor} boxSize={isDesktop ? "85px" : "110px"} alt="Mentor Club Logo" objectFit="cover" />
          </Link>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link href='/Mentors'>Find a Mentor</Link>
          </HStack>
        </HStack>
        {session?.user ? (
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
           
              <Avatar size={'sm'} src={session.user.img || ''}  />
            </MenuButton>
            <MenuList>
            <Text>{session.user.email}</Text>
            <Text>{session.user.id}</Text>
   
           <Button type='submit'>  <Link href='/editprofile'>Profile</Link></Button> 
            
              <MenuDivider />
              <form action={handleLogout}>
              <Button type='submit'>Logout</Button>
            </form>
            </MenuList>
          </Menu>
        ) : (
          <Stack direction={'row'} spacing={4}>
            <Button colorScheme="green">
              <Link href='/signup'>Signup</Link>
            </Button>
            <Button>
              <Link href='/Login'>Login</Link>
            </Button>
          </Stack>
        )}
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link href='/Mentors'>Find a Mentor</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
