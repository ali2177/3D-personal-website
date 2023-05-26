import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const ListItem = styled.li``;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo (1).png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search (1).png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
