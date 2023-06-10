import styled from "@emotion/styled";
import InventoryBox from "./InventoryBox";
import { useEffect, useRef, useState } from "react";
const Content3Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh + 1000px);
`;
const ContentWrapper = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-color: #0a2a0a;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const TitleFirstText = styled.p`
  color: white;
  font-size: 35px;
  font-weight: bold;
  width: 380px;
  text-align: center;
`;
const TitleSecondText = styled.p`
  color: white;
  font-size: 15px;
  width: 330px;
  text-align: center;
`;
const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 25px;
`;
const InventoryList = [
  {
    url: "/content3/inventory1.png",
    text: "Product Management",
  },
  {
    url: "/content3/inventory2.png",
    text: "Incoming/ Outgoing",
  },
  {
    url: "/content3/inventory3.png",
    text: "Expiry​ Date​",
  },
  {
    url: "/content3/inventory4.png",
    text: "Appropriate​ Stock",
  },
];

const Content3 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent);
    return () => {
      window.removeEventListener("scroll", yScrollEvent);
    };
  }, []);

  const yScrollEvent = () => {
    if (!scrollRef.current) return;
    const scroll = scrollRef.current.getBoundingClientRect();
    setScrollPosition(scroll.top);
  };

  return (
    <Content3Wrapper ref={scrollRef}>
      <ContentWrapper>
        <TitleWrapper>
          <TitleFirstText>Smart Inventory Management System</TitleFirstText>
          <TitleSecondText>
            {`Inventory Management menu supports managing the clinic's inventory
            items and status.​You can efficiently manage dental consumables and
            materials using this menu.​`}
          </TitleSecondText>
        </TitleWrapper>

        <BoxWrapper>
          {InventoryList.map((item, index) => {
            const { url, text } = item;
            return (
              <InventoryBox
                key={index}
                {...{ url, text, index, scrollPosition }}
              />
            );
          })}
        </BoxWrapper>
      </ContentWrapper>
    </Content3Wrapper>
  );
};
export default Content3;
