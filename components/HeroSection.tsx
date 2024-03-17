import { Box, Flex, Text } from '@chakra-ui/react';
import '../app/globals.css'

const HeroSection = () => {
    return (
        <Flex justifyContent={"space-between"} flexDirection={["column", "column", "row"]}>
            <Flex flexDirection={"column"}>
                <Box>
                    <Flex flexDirection={"column"} gap={2}>
                        <Text fontWeight={'semibold'} fontSize={["5xl","5xl","6xl","7xl"]} mb={"-1.5rem"}>Balmukund</Text>
                        <Text fontWeight={'semibold'} fontSize={["5xl","5xl","6xl","7xl"]}>Tiwari</Text>
                    </Flex>
                    <span style={{ fontSize: '50px' }} className='wave'>👋</span>
                </Box>
                <Text>
                    ------ Advocate legal & Tax Consultant
                </Text>
                <Text width={"22rem"}>
                    Based in Amir -ud-daula Public Library,
                    Lucknow , Uttar Pradesh
                </Text>
            </Flex>
            <Box mt={10}>
                <Box className='image'></Box>
            </Box>
        </Flex>
    )
}

export default HeroSection;

