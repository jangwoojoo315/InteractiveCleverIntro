import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import ItemBox from "./ItemBox";
import { useInView } from "react-intersection-observer";

const LeftToRight = keyframes`
from{
  transform:translateX(-100px);
  opacity:0;
}to{
transform:translateX(0);
opacity:1;

}
`;

const RightToLeft = keyframes`
from{
  transform:translateX(100px);
  opacity:0;
}to{
transform:translateX(0);
opacity:1;
}
`;

const Content4Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100vw;
  height: 50vh;
  background-color: rgb(249, 250, 251);
`;

const ItemBoxLeftToRIght = styled.div<{ inView: boolean }>`
  animation: ${(props) => (props.inView ? LeftToRight : "")} 2s;
`;
const ItemBoxRightToLeft = styled.div<{ inView: boolean }>`
  animation: ${(props) => (props.inView ? RightToLeft : "")} 2s;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleLeftToRight = styled.div<{ inView: boolean }>`
  color: black;
  font-weight: bold;
  animation: ${(props) => (props.inView ? LeftToRight : "")} 2s;
`;

const TitleRightToLeft = styled.div<{ inView: boolean }>`
  color: black;
  font-weight: bold;
  margin-left: 70px;
  animation: ${(props) => (props.inView ? RightToLeft : "")} 2s;
`;

const ItemList = [
  {
    url: "/content4/eyefi.png",
    title: "Eye-fi",
    description:
      "By using DSLR camera equipped with an Eye-fi card, images are directly uploaded to the Clever Dent via Wifi.​",
  },
  {
    url: "/content4/intraoral.png",
    title: "Intraoral Camera",
    description:
      "When taking images with a DSLR & Oral camera connected with EzDent-i and Clever Dent, images are automatically uploaded.​​",
  },
];
const Content4 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Content4Wrapper>
      <ContentWrapper ref={ref}>
        <ItemBoxLeftToRIght inView={inView}>
          <ItemBox
            url={ItemList[0].url}
            title={ItemList[0].title}
            description={ItemList[0].description}
          />
        </ItemBoxLeftToRIght>
        <TitleWrapper>
          <TitleLeftToRight inView={inView}>
            Support​Importing Images
          </TitleLeftToRight>
          <TitleRightToLeft inView={inView}>
            from Other Sources​
          </TitleRightToLeft>
        </TitleWrapper>
        <ItemBoxRightToLeft inView={inView}>
          <ItemBox
            url={ItemList[1].url}
            title={ItemList[1].title}
            description={ItemList[1].description}
          />
        </ItemBoxRightToLeft>
      </ContentWrapper>
    </Content4Wrapper>
  );
};
export default Content4;
