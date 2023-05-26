import React from "react";
import styled from "styled-components";

const items = ["Web Design", "Development", "illustration", "Social Media"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
`;
const List = styled.ul``;
const ListItem = styled.li`
  font-size: 100px;
  padding: 20px;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 1s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
      </Container>
    </Section>
  );
};

export default Works;
