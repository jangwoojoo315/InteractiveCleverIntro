import styled, { keyframes } from "styled-components";
import Content1 from "./Content1";
import IntroduceVideo from "./IntroduceVideo";

const FadeIn = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;

const IntroWrapper = styled.div`
  animation: ${FadeIn} 2s;
  width: 100vw;
  height: 100vh;
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroduceVideo />
      <Content1 />
    </IntroWrapper>
  );
};
export default Intro;
