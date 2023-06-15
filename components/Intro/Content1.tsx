import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { InView, useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fadeInLeftToRight = keyframes`
from {
  opacity:0;
  transform:translateX(-500px);
}
to{
  opacity:1;
  transform:translateX(0);
}

`;

const Content1Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ImageWrapper = styled.div<{ inView: boolean }>`
  opacity: 0;
  animation: ${(props) => (props.inView ? fadeInLeftToRight : "")} 1s;
  animation-fill-mode: forwards;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 15px;
  color: rgb(99, 115, 129);
  line-height: 20px;
`;

const Content1 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <Content1Wrapper ref={ref}>
      <ImageWrapper inView={inView}>
        <Image
          src={"/content1/computer.png"}
          width={400}
          height={600}
          alt={"computer"}
        />
      </ImageWrapper>
      <TextWrapper>
        <Title>Automated </Title>
        <Title>Salary Management System</Title>
        <Description>
          Salary for each doctor and employee is automatically calculated
          according to the salary rules set for each doctor and employee, so you
          can reduce salary-related tasks and run the clinic efficiently.
        </Description>
      </TextWrapper>
    </Content1Wrapper>
  );
};
export default Content1;
