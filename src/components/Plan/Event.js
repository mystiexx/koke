import React from "react";
import { Container } from "react-bootstrap";
import { Box, Grid, Text } from "@chakra-ui/react";
import "./Event.css";
import { useMediaQuery } from "@chakra-ui/media-query";

const Event = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <div className="e">
            <Container>
                <h3 className="e-header">Events</h3>

                <Box
                    p={4}
                    bg="#fff"
                    color="#1c3548"
                    alignItems="center"
                    textAlign="center"
                    marginTop="30px"
                    boxShadow="0px 25px 50px rgba(255, 69, 10, 0.13)"
                    fontSize='1.5rem'
                >
                    <Grid
                        templateColumns={isNotSmallerScreen ? "repeat(4, 1fr)" : "repeat(2, 1fr)"}
                        gap={6}
                    >
                        <Text> {Date.now()}</Text>
                        <Text>Launch Party</Text>
                        <Text> Time </Text>
                        <Text> Venue </Text>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Event;
