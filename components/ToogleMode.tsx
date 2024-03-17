"use client"
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { Box, useColorMode } from '@chakra-ui/react'

const ToogleMode = () => {
    const [mounted, setMounted] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => setMounted(true))
    if (!mounted) {
        return null
    }
    return (
        <Box onClick={toggleColorMode} cursor={"pointer"}>
            {colorMode === 'light' ? <FaMoon size={"1.3rem"} /> : <FaSun size={"1.3rem"} />}
        </Box>
    )
}

export default ToogleMode;
