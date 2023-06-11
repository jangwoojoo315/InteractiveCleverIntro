import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";
interface ItemBoxProps {
  url: string;
  title: string;
  description: string;
}

const WaveAnimate = keyframes`
0%,
100% {
  clip-path: polygon(
    40% 23%, 84% 17%, 100% 18%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 17%, 19% 21%
  );
}

50% {
  clip-path: polygon(
    39% 16%, 83% 23%, 100% 18%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 27%, 17% 20%
  );
}

`;

const ItemBoxWrppaer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px 0px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const TitleWrapper = styled.div`
  font-size: 12;
  font-weight: bold;
`;

const DescriptionWrapper = styled.div`
  font-size: 10;
  color: lightgray;
  line-height: 1.2;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  animation: ${WaveAnimate} 4s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleItemBox = (props: ItemBoxProps) => {
  const { url, title, description } = props;
  return (
    <ItemBoxWrppaer>
      <TextWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
      </TextWrapper>
      <ImageWrapper>
        <Image src={url} width={130} height={130} alt={"image"} />
      </ImageWrapper>
    </ItemBoxWrppaer>
  );
};
export default GoogleItemBox;
