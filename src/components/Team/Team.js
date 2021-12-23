import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Team.css";
import content from "./content.js";

class Team extends Component {
    constructor() {
        super();
        this.state = {
            content: content,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        const { content } = this.state;
        return (
            <div className="pb-5">
                <div className="header pb-4">
                    <h2 className="header-text pt-4">The Team</h2>
                </div>

                <Container className="mt-5">
                    <Row>
                        {content.map((data, i) => (
                            <div>
                                <Col>
                                    <div className="front-card" id="i">
                                        <div className="front">
                                            <img src={data.image} alt="male"  className="p-3"/>
                                        </div>
                                        <div className="back">
                                            <div className="back-content middle">
                                                <h2>{data.name}</h2>
                                                <h4>{data.position}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Team;
