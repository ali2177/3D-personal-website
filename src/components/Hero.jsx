import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  flex: 2;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const WhatWeDo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1rem;
`;
const Line = styled.img`
  width: 30px;
  height: 5px;
`;
const Subtitle = styled.h2`
  font-weight: 400;
  color: gray;
`;
const Description = styled.p`
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-size: 15px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: -100px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite linear alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line (1).png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Description>
            we enjoy creating delightful, human-centerd digital experience
          </Description>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/moon (1).png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
