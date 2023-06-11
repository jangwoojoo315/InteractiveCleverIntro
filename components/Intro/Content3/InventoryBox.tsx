import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InventoryBoxProps {
  url: string;
  text: string;
  index: number;
  scrollPosition: number;
}

const InventoryBoxWrapper = styled.div<{
  xPosition: number;
  opacity: number;
  index: number;
}>`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  opacity: ${(props) => props.opacity};
  top: ${(props) => (props.index + 1) * 110}px;
  left: 250px;
  transform: translateX(-${(props) => props.xPosition}px);
`;

const TextWrapper = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const checkPosition = (scrollPosition: number, index: number) => {
  if (index === 0) {
    if (scrollPosition < 250) {
      return { xPosition: scrollPosition, opacity: scrollPosition / 1000 };
    }
  } else if (index === 1) {
    if (scrollPosition < 500) {
      const xPosition = scrollPosition - 250;
      return { xPosition, opacity: xPosition / 1000 };
    }
  } else if (index === 2) {
    if (scrollPosition < 750) {
      const xPosition = scrollPosition - 500;
      return { xPosition, opacity: xPosition / 1000 };
    }
  } else if (index === 3) {
    if (scrollPosition < 1000) {
      const xPosition = scrollPosition - 750;
      return { xPosition, opacity: xPosition / 1000 };
    }
  }
  return { xPosition: 250, opacity: 1 };
};

const InventoryBox = (props: InventoryBoxProps) => {
  const { url, text, index, scrollPosition } = props;
  const [animationValue, setAnimationValue] = useState({
    xPosition: 0,
    opacity: 0,
  });
  useEffect(() => {
    if (scrollPosition > 0) {
      setAnimationValue({ xPosition: 250, opacity: 0 });
      return;
    }
    const { xPosition, opacity } = checkPosition(
      Math.abs(scrollPosition),
      index
    );
    if (!xPosition) return;
    setAnimationValue({ xPosition, opacity });
  }, [index, scrollPosition]);
  return (
    <InventoryBoxWrapper
      xPosition={animationValue.xPosition}
      opacity={animationValue.opacity}
      index={index}
    >
      <Image src={url} width={80} height={80} alt={"image"} />
      <TextWrapper>{text}</TextWrapper>
    </InventoryBoxWrapper>
  );
};
export default InventoryBox;
