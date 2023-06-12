import ItemBox from "./ItemBox";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { ItemType } from "./type";
import Image from "next/image";
const items: ItemType[] = [
  {
    imgUrl: "/content2/image1.png",
    title: "Easy & powerful CRM",
    description:
      "Clever Dent provides Powerful CRM target search for detailed patient management. By linking WhatsApp to Clever Dent, you can manage and communicate with patients easily and conveniently.​",
  },
  {
    imgUrl: "/content2/image2.png",
    title: "Communication with Patients",
    description:
      "Clever Dent provides a real-time chat function via WhatsApp with patients registered in your clinic. Stay in touch with your patients more efficiently.​",
  },
  {
    imgUrl: "/content2/image3.png",
    title: "Linkage to All Vatech Imaging Systems",
    description:
      "Images stored in EzDent-i are automatically uploaded to patient’s file.​ You can check the X-ray image without running the viewer program.​",
  },
];
const Content2Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #0b3b17;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const getTopPixel = (focusIndex: number, index: number) => {
  if (focusIndex === index) {
    return 0;
  }

  //index===0 or 1
  if (index === 0 || index === 2) {
    const diffIndex = focusIndex - index;
    return -250 * diffIndex;
  }

  //index===1
  if (index === 1) {
    if (focusIndex - index === -1) {
      //0,1
      return 250;
    } else if (focusIndex - index === 1) {
      //2,1
      return -250;
    }
  }
};

const ItemContainer = styled.div<{ focusIndex: number; index: number }>(
  ({ focusIndex, index }) => {
    return {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      right: `calc(300px + (-100px * ${Math.abs(focusIndex - index) * 5}))`,
      top: `calc(50% - (100px + ${getTopPixel(focusIndex, index)}px))`,
      transition: "top 0.5s ease, right 0.5s ease",
      opacity: focusIndex === index ? 1 : 0.2,
    };
  }
);

const NextButton = styled.button<{ focusIndex: number }>(({ focusIndex }) => {
  return {
    fontSize: 35,
    position: "absolute",
    top: `calc(50% - 145px)`,
    display: focusIndex === 2 ? "none" : "block",
    backgroundColor: "transparent",
    border: "none",
    transform: "rotate(-90deg)",
    cursor: "pointer",
  };
});

const PreviousButton = styled.button<{ focusIndex: number }>(
  ({ focusIndex }) => {
    return {
      fontSize: 35,
      position: "absolute",
      top: `calc(50% + 115px)`,
      display: focusIndex === 0 ? "none" : "block",
      backgroundColor: "transparent",
      border: "none",
      transform: "rotate(-90deg)",
      cursor: "pointer",
    };
  }
);

const CircleContainer = styled.div<{ focusIndex: number }>(({ focusIndex }) => {
  return {
    position: "absolute",
    top: "calc(50% - 100px)",
    right: -100,
    transform: `rotate(${focusIndex * -45}deg)`,
    transition: "transform 1s linear",
  };
});

const Content2 = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <Content2Container>
      <TitleContainer>
        <Title>
          Clever Dent Is The Solution For Your Successful Dental Practice
          Management
        </Title>
      </TitleContainer>
      <ContentContainer>
        <CircleContainer focusIndex={focusIndex}>
          <Image
            src={"/content2/circle.png"}
            width={200}
            height={200}
            alt={"circle"}
          />
        </CircleContainer>
        <NextButton
          focusIndex={focusIndex}
          onClick={() => {
            setFocusIndex((prev) => prev + 1);
          }}
        >
          {">"}
        </NextButton>
        {items.map((item, index) => {
          return (
            <ItemContainer focusIndex={focusIndex} index={index} key={index}>
              <ItemBox item={item} />
            </ItemContainer>
          );
        })}
        <PreviousButton
          focusIndex={focusIndex}
          onClick={() => {
            setFocusIndex((prev) => prev - 1);
          }}
        >
          {"<"}
        </PreviousButton>
      </ContentContainer>
    </Content2Container>
  );
};
export default Content2;
