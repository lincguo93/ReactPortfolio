import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const projects = () => {
    return (
        <div>
            <video src="/video2.mp4" autoPlay loop muted />
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Portfolio</h5>
                        <hr />
                        <Row>
                            <Col md={6}>
                                <p>
                                    <a href="https://lincguo93.github.io/Moodvie/">
                                        Deployed Project Link
									</a>{" "}
									|{" "}
                                    <a href="https://github.com/lincguo93/Moodvie">
                                        Project Repo
									</a>
                                </p>
                                <p>
                                Moodvie is a movie suggestion generator that allows someone in quarantine to find a movie suggestion based on GIF's/moods.
								</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>
                                    <a href="https://powerful-inlet-28196.herokuapp.com/">
                                        Deployed Project Link
									</a>{" "}
									|{" "}
                                    <a href="https://github.com/Kfields91/Habit-Rabbit">
                                        Project Repo
									</a>
                                </p>
                                <p>
                                Habit-Rabbit is a habit tracking app that offers the ability to add and track daily habits in order to promote self awareness. 
                                Our goal is to provide details that enable the user to adjust their habits according to their life goals.
								</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                {/* <img src="./assets/password_gen_ss.png" /> */}
                                <p>
                                    <a href="https://lincguo93.github.io/Weather-Dashboard/">
                                        Deployed Project Link
									</a>{" "}
									|{" "}
                                    <a href="https://github.com/lincguo93/Weather-Dashboard">
                                        Project Repo
									</a>
                                </p>
                                <p>
                                    Weather Dashboard is a weather searching application that allows you to search, to keep the weather forecast of 
                                    the desired city by searching.
								</p>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default projects;