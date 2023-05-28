"use client";

import styled from "@emotion/styled";

interface HeaderProps {
  children: React.ReactNode;
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  gap: 10px;
  padding: 10px 10px 0 0;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffbf00;
`;

const Header = (props: HeaderProps) => {
  const { children } = props;
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Text>SignUp</Text>
        <Text>LogIn</Text>
      </HeaderWrapper>
      {children}
    </ContentWrapper>
  );
};
export default Header;
