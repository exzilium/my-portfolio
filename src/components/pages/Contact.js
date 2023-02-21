import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Contact() {
  // Form state
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form field states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Message states
  const [errorMessage, setErrorMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  // Validator states
  const [validated, setValidated] = useState(false);

  // Handlers

  // Handle Change
  const handleChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // setState of form fields
    if (inputType === "username") {
      setUsername(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else {
      console.error("No input of this type found!");
    }
  };

  // Handle OnBlur validation checks
  function handleBlur(event) {
    if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required`);
    } else {
      setErrorMessage("");
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.value]: event.target.value });
    }
  }

  // Handle Submit with validation checks
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (form.checkValidity() === true) {
      setUsername("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmitMessage("Thank you!");
    }
  };

  //

  return (
    <div>
      <h1>Contact Me</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            name="username"
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={username}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            required
            name="subject"
            type="text"
            placeholder="Enter subject"
            onChange={handleChange}
            onBlur={handleBlur}
            value={subject}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a subject
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            name="message"
            as="textarea"
            rows={3}
            onChange={handleChange}
            onBlur={handleBlur}
            value={message}
          />
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
