import React from "react";
import { Box, Text } from "@chakra-ui/react";
import './Member.css'

const Frame = () => {
    return (
        <>
            <Box w="50%" h="100vh"  p={5} className="frame">
                <Text fontSize='10.0rem' fontWeight='bold' textAlign='right' color='#fff'>Join</Text>
                <Text fontSize='3rem' textAlign='right' color='#fff'>Please fill out the details</Text>
            </Box>
        </>
    );
};

export default Frame