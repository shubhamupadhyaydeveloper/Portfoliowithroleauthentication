import AuthButton from './AuthButton'
import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react'
import ToogleMode from './ToogleMode'
import Link from 'next/link'

export default function Navbar() {

    return (
        <>
            <Box px={4}>
                <Flex
                    justifyContent={'center'}
                    position={"fixed"}
                    padding={2}
                    paddingY={"13px"}
                    top={"0px"}
                    zIndex={20}
                    bg="rgba(255, 255, 255, 0.2)"
                    backdropFilter="blur(8px)"
                    left={"0px"}
                    w={"100vw"}
                    alignItems={"center"}
                    marginBottom={"4rem"}
                >
                    <Flex
                        w={["320px", "375px", "780px"]} justifyContent={"space-between"}
                    >
                        <Link href="/" >
                        <Text fontWeight={"bold"} fontSize={"xl"}>BT.</Text>
                        </Link>

                        <Flex alignItems={'center'} gap={7} >
                            <ToogleMode />
                            <AuthButton />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}