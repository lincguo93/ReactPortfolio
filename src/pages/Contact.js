import React from "react";
import { Container, Col } from "../components/Grid";
import { Input, TextArea } from "../components/Form";
import {SigninButton} from '../components/Btn/btn';

function Contact() {
  return (
    <div>
      <video src="/video2.mp4" autoPlay loop muted />
      <Container fluid>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <form>
            <h1>Contact</h1>
            <Input
              name="Name"
              placeholder="Name"
            />
            <Input
              name="Email"
              placeholder="Email"
            />
            <TextArea
              name="Message"
              placeholder="Message"
            />
          </form>
        </Col>
        <Col size="md-2"></Col>
        <SigninButton
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
      >
        Submit
      </SigninButton>
      </Container>
    </div>
  );
}
export default Contact;
