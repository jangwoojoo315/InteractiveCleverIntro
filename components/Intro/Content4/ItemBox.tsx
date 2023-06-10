import styled from "@emotion/styled";
import Image from "next/image";

interface ItemBoxProps {
  url: string;
  title: string;
  description: String;
}

const ItemBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 10px;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid lightgray;
`;
const Title = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
const Description = styled.p`
  color: gray;
  font-size: 12px;
`;
const ItemBox = (props: ItemBoxProps) => {
  const { url, title, description } = props;
  return (
    <ItemBoxWrapper>
      <Image src={url} width={150} height={80} alt="image" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ItemBoxWrapper>
  );
};
export default ItemBox;
