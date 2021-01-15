import { BackButton } from "./BackButton";
import styled from "styled-components";

const PageTitle = styled.h1`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: #ffffff;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <BackButton />
      <PageTitle>Мои Заказы</PageTitle>
    </HeaderContainer>
  );
};
