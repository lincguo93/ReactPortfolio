import React from "react";
import { Col, Row, Container } from "../components/Grid";

function About() {
  return (
    <div>
      <video src="/video2.mp4" autoPlay loop muted />
      <Container fluid>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-10">
            <h1>
              Hi! Nice to meet you...
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <article>
              <p>
                I am a highly motivated graduate with a Bachelor of Mechanical Engineering at the University of Washington. With more than 3 years of experience as a systems installation engineer with Panasonic Avionics Corporation. During this period, I obtained follow responsibilities: Provide engineering releases of aircraft seats, related component, In Flight Entertainment (IFE), and under floor electrical wiring. Support engineering projects within the Systems Installation group from electrical / mechanical / seat design standpoint, including from systems integration to installation by following lean principles and maintaining schedule and budget. Help with engineering design and development of aircraft installation packages based on customers’ and OEM’s requirements for production and retrofit applications. Liaison engineering support for meetings and system installations with customer, seat integrator, and OEM. Coordinate procurement and selection of parts, materials, and components with suppliers. A year of graphic, function designing experience in my past position as a mechanical engineer at the MVP Group Inc. I have also developed competent 3D product designing and key project management skills.
              </p>
              <p>
                Before I graduate from the University of Washington, I worked as an aircraft maintenance technician at China Southern Airline. During this period, I assisted senior technicians to complete all repairs and maintenance work to company and CAAC standards. As I am required to ensure risk assessments of vital aircraft components are correctly implemented and excluded, successful insight and communication is critical to my role.
              </p>
            </article>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    </div>
  );
}


export default About;
