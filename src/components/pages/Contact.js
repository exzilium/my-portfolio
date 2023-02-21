import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

// 

  return (
    <div>
      <h1>Contact Me</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
          <Form.Control.Feedback type="invalid">
            Please enter a name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid">
            Please enter a message
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
