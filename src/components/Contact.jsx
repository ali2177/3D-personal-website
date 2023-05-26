import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
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
const Right = styled.div`
  flex: 1;
`;
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name"></Input>
            <Input placeholder="Email"></Input>
            <Textarea placeholder="write yuor message ..." rows={10}></Textarea>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
