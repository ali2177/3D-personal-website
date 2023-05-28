import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Alert, Snackbar } from "@mui/material";

const Title = styled.h1`
  font-weight: 400;
  color: lightgrey;
`;
const Input = styled.input`
  width: 100%;
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71pdwd9",
        "template_g8ix9da",
        form.current,
        "NaauJbClZ32pYuLdd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <Title>Contact Us</Title>
        <Input placeholder="Name" name="name"></Input>
        <Input placeholder="Email" name="email"></Input>
        <Textarea
          placeholder="write yuor message ..."
          rows={10}
          name="message"
        ></Textarea>
        <Button type="submit" value="Send">
          Send
        </Button>
      </Form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thanks😍 Your email is sent 📨 We'll get back to you soon .
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
