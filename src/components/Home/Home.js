import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import data from "./content.js";
import { useMediaQuery } from "@chakra-ui/media-query";

const Home = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Container>
                <div>
                    {/* <Box h={isNotSmallerScreen ? "90vh" : "90vh"}>
                        <Box
                            w="100%"
                            mt={5}
                            p={3}
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                                boxShadow: "0px 25px 50px rgba(255, 69, 10, 0.13)",
                            }}
                        >
                            <section id="skills">
                                <div className="skill-text">
                                    <div className="skill-heading">
                                        <span>KOKE</span>
                                        <h2>EMPIRE</h2>
                                    </div>
                                    <div className="s-box-container">
                                        <div className="skill-box">
                                            <div className="s-box-text">
                                                <strong>Vision</strong>
                                                <p>
                                                    {" "}
                                                    To promote and encourage entertainment (music,
                                                    dance, modeling, film making etc.) and fashion
                                                    across Africa and the world at large{" "}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="skill-box">
                                            <div className="icon-box" />

                                            <div className="s-box-text">
                                                <strong>Mission</strong>
                                                <p>
                                                    {" "}
                                                    To be one of Africa’s leading producers and
                                                    providers of entertainment and apparels, using
                                                    its portfolio of brands to differentiate its
                                                    content, services , consumer products and
                                                    content creating.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skill-img ml-5">
                                    <img src={first} alt="slide" />
                                </div>
                            </section>
                        </Box>
                    </Box> */}

                    <Box
                        h={isNotSmallerScreen ? "60vh" : "100vh"}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginTop="30px"
                        marginBottom="30px"
                    >
                        <Grid
                            templateColumns={
                                isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
                            }
                            gap={6}
                        >
                            {data.map((data) => (
                                <Box bg="#fff" borderRadius="10px" p={5}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Image src={data.image} alt={data.title} boxSize="100px" />
                                    </Box>
                                    <Text
                                        textAlign="center"
                                        color="#1c3548"
                                        fontSize="1.2rem"
                                        fontWeight="700"
                                    >
                                        {data.title}{" "}
                                    </Text>
                                    <Text textAlign="center" color="#1c3548">
                                        {data.text}{" "}
                                    </Text>
                                    <Link to={data.link} className="link">
                                        <button className="ser-button">Learn more</button>
                                    </Link>
                                </Box>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </Container>
        </div>
    );
};

export default Home;
