import React, { useState } from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 748px) {
    width: 100%;
    position: relative;
  }
  @media screen and (max-width: 1243px) {
    width: 80%;
    padding: 10px 10px;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media screen and (max-width: 748px) {
    width: 100%;
    padding: 10px 10px;
  }
  @media screen and (max-width: 1243px) {
    width: 100%;
    padding: 10px 10px;
  }
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
  transition: left 1s ease-in-out;

  @media screen and (max-width: 748px) {
    text-align: center;
    overflow: hidden;
    padding: 5px 10px;
    width: 90%;
    background-color: #2c2929b3;
    position: absolute;
    top: 75px;
    left: -110%;
    gap: 0px;
    flex-direction: column;
    border-radius: 15px;
  }
`;
const ListItem = styled.li`
  @media screen and (max-width: 748px) {
    width: 100%;
    padding: 30px 0;
    &:not(:last-child) {
      border-bottom: 1px solid rgb(255 255 255 / 26%);
    }
  }
`;
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
  const [showList, setShowList] = useState(false);
  const classtyle = "active";
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo (1).png" />
          <List className={showList ? classtyle : ""}>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <HiMenu className="btn" onClick={() => setShowList(!showList)} />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
