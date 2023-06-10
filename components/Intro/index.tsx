import styled, { keyframes } from "styled-components";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
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
      <Content2 />
      <Content3 />
      <Content4 />
    </IntroWrapper>
  );
};
export default Intro;
