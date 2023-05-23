import styled, { keyframes } from "styled-components";
import { useState } from "react";

const FadeOutToLeft = keyframes`
from{
  transform:translateX(0)
}
to{
  transform:translateX(-1000px)
}
`;

const FadeOutToRight = keyframes`
from{
  transform:translateX(0)
}
to{
  transform:translateX(800px)
}
`;

const TriangleBackground = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 100vh solid #0a2a0a;
  border-left: 60vw solid transparent;
  animation: ${(props) => (props.active ? FadeOutToRight : "")} 3s;
  animation-fill-mode: forwards;
`;

const TrapezoidBackground = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 100vh solid transparent;
  border-right: 60vw solid transparent;
  height: 0;
  width: 40vw;
  animation: ${(props) => (props.active ? FadeOutToLeft : "")} 3s;
  animation-fill-mode: forwards;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: calc(50vh - 188px);
  left: 15vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleContainer = styled.div`
  width: 200px;
  font-size: 4rem;
  font-weight: bold;
`;

const DescriptionContainer = styled.div`
  width: 300px;
  color: gray;
`;

const StartButton = styled.button`
  width: fit-content;
  background-color: #0a2a0a;
  font-size: 17px;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
`;

const Landing = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ backgroundColor: "lightGray", width: "100vw", height: "100vh" }}
    >
      <TriangleBackground
        active={active}
        onAnimationEnd={() => {
          console.log("anmaiton is End!!!");
        }}
      />
      <TrapezoidBackground active={active}>
        <ContentContainer>
          <TitleContainer>Easy & Convenient patient management</TitleContainer>
          <DescriptionContainer>
            Patient menu provides all patient-related information such as
            Patient information, Schedule List, Medical alerts, Introduction &
            Family, Chart, Payment, Document and Files.​
          </DescriptionContainer>
          <StartButton
            onClick={() => {
              setActive(true);
            }}
          >
            Get Started
          </StartButton>
        </ContentContainer>
      </TrapezoidBackground>
    </div>
  );
};
export default Landing;
