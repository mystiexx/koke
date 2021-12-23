import React, { Component } from "react";
import "./Contact.css";
import { Box, Text, Center } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="pb-5">
                <div className="header pb-4">
                    <div className="head">
                        <h2 className="header-text ">Contact Us</h2>
                    </div>
                </div>

                <div>
                    <Center>
                        <Box
                            background="#fff"
                            marginTop="30px"
                            p={5}
                            borderRadius="5px"
                            boxShadow="xl"
                        >
                            <Center>
                                {" "}
                                <HiOutlineMail size={20} />{" "}
                            </Center>

                            <Text textAlign="center" mb={3} fontWeight="500" fontSize="16px">
                                {" "}
                                epmirekoke@gmail.com
                            </Text>
                            <Center>
                                {" "}
                                <FiPhoneCall  size={20}/>
                            </Center>

                            <Text textAlign="center"  mb={3} fontWeight="500" fontSize="16px">08114039911</Text>

                            <Center>
                                {" "}
                                <FaInstagram  size={20}/>{" "}
                            </Center>

                            <Text textAlign="center" mb={3} fontWeight="500" fontSize="16px">koke_empire_gram</Text>

                            <Center>
                                {" "}
                                <AiOutlineHome  size={20}/>{" "}
                            </Center>

                            <Text textAlign="center" fontWeight="500" fontSize="16px">
                                {" "}
                                FEDERAL UNIVERSITY OTUOKE, BAYELSA STATE NIGERIA
                            </Text>
                        </Box>
                    </Center>
                </div>
            </div>
        );
    }
}

export default Contact;
