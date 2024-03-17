'use client'

import {
    Flex,
    Text,
} from '@chakra-ui/react'



export default function Footer() {
    return (
        <Flex mt={"10rem"} w={["320px", "375px", "780px"]} mx={"auto"} flexDirection={"column"}>
           <Text fontWeight={"semibold"}>Advocate balmukund Tiwari</Text>
           <Text>&copy; 2024 all right reserver</Text>
        </Flex>
    )
}