import Image from "next/image";
import styled from "@emotion/styled";
import { ItemType } from "./type";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #585858;
  border-radius: 16px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
`;

const ItemTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const ItemDescription = styled.span`
  font-size: 14px;
  color: #bdbdbd;
`;

interface ItemBoxProps {
  item: ItemType;
}

const ItemBox = (props: ItemBoxProps) => {
  const { imgUrl, title, description } = props.item;
  return (
    <ItemContainer>
      <Image src={imgUrl} width={200} height={200} alt={"image1"} />
      <TextContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </TextContainer>
    </ItemContainer>
  );
};
export default ItemBox;
