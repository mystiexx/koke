import React from "react";
import { Flex } from "@chakra-ui/react";
import Frame from "./Frame";
import Member from "./Member";
import { useMediaQuery } from "@chakra-ui/media-query";


const MemberIndex = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <> 
        {
            isNotSmallerScreen ? (
                <Flex>
                <Frame />
                <Member />
            </Flex>
            ) : (
                <Member />
            )
        }
           
        </>
    );
};

export default MemberIndex;
