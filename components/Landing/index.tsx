import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Intro from "../Intro";
const FadeOutToLeft = keyframes`
from{
  transform:translateX(0)
}
to{
  transform:translateX(-100%)
}
`;

const FadeOutToRight = keyframes`
from{
  transform:translateX(0)
}
to{
  transform:translateX(100%)
}
`;

//https://fromnowwon.tistory.com/entry/css-triangle-bubble 도형그리기
const TriangleBackground = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 100vh solid #0a2a0a;
  border-left: 60vw solid transparent;
  animation: ${(props) => (props.isActive ? FadeOutToRight : "")} 1s;
  animation-fill-mode: forwards;
`;
const ContentContainerWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  height: 100%;
  padding-left: 13vw;
  justify-content: flex-start;
  align-items: center;
  animation: ${(props) => (props.isActive ? FadeOutToLeft : "")} 1s;
  animation-fill-mode: forwards;
`;

const ContentContainer = styled.div`
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
  const [isLanding, setIsLanding] = useState(true);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {isLanding ? (
        <>
          <TriangleBackground
            isActive={active}
            onAnimationEnd={() => {
              setIsLanding(false);
            }}
          />
          <ContentContainerWrapper isActive={active}>
            <ContentContainer>
              <TitleContainer>
                Easy & Convenient patient management
              </TitleContainer>
              <DescriptionContainer>
                Patient menu provides all patient-related information such as
                Patient information, Schedule List, Medical alerts, Introduction
                & Family, Chart, Payment, Document and Files.​
              </DescriptionContainer>
              <StartButton
                onClick={() => {
                  setActive(true);
                }}
              >
                Get Started
              </StartButton>
            </ContentContainer>
          </ContentContainerWrapper>
        </>
      ) : (
        <Intro></Intro>
      )}
    </div>
  );
};
export default Landing;
