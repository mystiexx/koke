import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import LightSpeed from 'react-reveal/LightSpeed'

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="pb-5">
                <div className="header pb-4">
                    <div className="head">
                        <LightSpeed>
                        <h2 className="header-text ">About Us</h2>
                        </LightSpeed>
                    </div>
                </div>

                <Container>
                    <div>
                        <p className="pb-5 about-text mt-5">
                        KOKE EMPIRE is an entertainment brand that 
                        was established in the year 2017 by group of friends 
                        with the sole purpose of sharing, promoting and creating business ideas. 
                        Over the years our audience has grown and we’ve been able to create 
                        a platform where young creative minds can be made known to the world 
                        regardless of what they’re into be it entertainment or
                         Entrepreneurial skill.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;
