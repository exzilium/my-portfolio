import React from "react";
import avatar from "../../assets/casey_default_circle.png";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Hi, I'm Casey</h1>
          <img src={avatar} alt="headshot" width="300px" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Card className="shadow-sm" style={{ width: "500px" }}>
          <Card.Body>
            <p>
              I’m a product manager-turned-full stack developer with a proven
              track-record of driving impact via leading distributed agile teams
              to create user-centric, globally scaled software, getting hands-on
              with licensed apps, integrating 3rd party APIs, and developing web
              apps.
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
