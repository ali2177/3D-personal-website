import React from "react";
import styled from "styled-components";
import Map from "./Map";
import ContactForm from "./ContactForm";

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

const Right = styled.div`
  flex: 1;
`;
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ContactForm />
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
