"use client"
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex
} from '@chakra-ui/react';
import React from 'react'
import { CheckIcon } from '@chakra-ui/icons'

type Feature = {
    id: number,
    text: string
}

const Services = () => {
    const features: Feature[] = [{
        id: 1,
        text: "Civil & Crinimal Matters"
    },
    {
        id: 2,
        text: 'ESIC / EPF'
    }, {
        id: 3,
        text: "Civil & Crinimal Matters"
    }, {
        id: 4,
        text: "Civil & Crinimal Matters"
    }]
    return (
        <>

            <Box mt={"8rem"}>
                <Text

                    fontWeight={"semibold"}
                    fontSize={"5xl"}
                    as={"span"}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: '210px',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'red.400',
                        zIndex: -1,
                    }}>
                    Services
                </Text>
                <Box p={4}>
                    <Stack mt={3} spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                        <Heading fontSize={'2xl'}>The Firm Offers The Following Services</Heading>

                    </Stack>

                    <Stack mt={"4rem"} >
                        <Flex direction={['column', 'row']} flexWrap="wrap">
                        {features.map((item) => (
                            <Box key={item.id} width={['100%', '50%']}>
                                <Flex alignItems="center" gap={2}>
                                    <Icon as={CheckIcon} color="green" />
                                    <Text fontWeight="semibold" fontSize="xl">
                                        {item.text}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                        </Flex>
                    </Stack>


                </Box>
            </Box>
        </>
    )
}

export default Services;
