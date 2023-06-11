import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import WebItemBox from "./WebItemBox";
import GoogleItemBox from "./GoogleItemBox";

const RightToLeft = keyframes`
0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-25%);
  }
  75% {
    transform: translateX(-75%);
  }
100%{
    transform: translateX(-100%);
}
`;

const Content5Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BillboardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  font-size: 4rem;
  color: #f2fbef;
  font-weight: bold;
`;

const Billboard = styled.p`
  animation: ${RightToLeft} 50s linear infinite;
`;

const ItemBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const sentence =
  "THIS IS THE STRENGTH OF CLEVER THIS IS THE STRENGTH OF CLEVER";

const ItemBoxList = [
  {
    url: "/content5/image1.png",
    title: "Web & Cloud Scalability",
    description:
      "With a cloud-based solution, you can manage your clinic and patients using mobile and tablet regardless of time and place.",
  },
  {
    url: "/content5/image2.png",
    title: "Sync with Google Calendar",
    description:
      "By synchronizing with Google account, doctors can check their schedule registered in Clever Dent in Google Calendar. They can check their schedules on mobile device even outside the clinic.​",
  },
];

const Content5 = () => {
  const setenceRef = useRef<HTMLDivElement | null>(null);

  return (
    <Content5Wrapper>
      <ContentWrapper>
        <BillboardWrapper ref={setenceRef}>
          <Billboard>{sentence}</Billboard>
          <Billboard>{sentence}</Billboard>
        </BillboardWrapper>
        <ItemBoxWrapper>
          <WebItemBox
            url={ItemBoxList[0].url}
            title={ItemBoxList[0].title}
            description={ItemBoxList[0].description}
          />

          <GoogleItemBox
            url={ItemBoxList[1].url}
            title={ItemBoxList[1].title}
            description={ItemBoxList[1].description}
          />
        </ItemBoxWrapper>
      </ContentWrapper>
    </Content5Wrapper>
  );
};
export default Content5;
