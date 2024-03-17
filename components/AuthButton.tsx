import React from 'react'
import { auth } from '@/lib/auth';
import LoginPage from "@/app/(auth)/login/page";
import LogoutPage from "@/app/(auth)/logout/page";
import {
    Box,
    Flex,
    Menu,
} from '@chakra-ui/react';
import Link from 'next/link';

const AuthButton = async () => {
    const session = await auth()
    return (
     <Menu>
        <Flex gap={3} alignItems={"center"}>
            {session?.user?.role === "ADMIN" ?
                <Box
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.300"
                    bg="white"
                    color="gray.700"
                    px={1}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ outline: 'none' }}
                >  <Link href='/admin'>Admin</Link> </Box>
                : null}
            {session ?
                <Box
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.300"
                    bg="white"
                    color="gray.700"
                    px={1}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ outline: 'none' }}
                >
                    <LogoutPage />
                </Box>
                : <Box
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.300"
                    bg="white"
                    color="gray.700"
                    px={1}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: 'gray.100' }}
                    _focus={{ outline: 'none' }}
                >
                    <LoginPage />
                </Box>}
        </Flex>
     </Menu>
    )
}

export default AuthButton;
