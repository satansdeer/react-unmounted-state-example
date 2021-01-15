import styled from "styled-components";

const OrderSummaryContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
`;

const SeparatorLine = styled.div`
  border: 1px dashed #e1e1ed;
  margin: 8px 8px 13px 8px;
`;

const Title = styled.h2`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
`;

const Price = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 800;
  color: #4b4b7c;
`;

export const OrderSummary = () => {
  return (
    <OrderSummaryContainer>
      <Title>Ленивая Маргарита</Title>
      <Description>
        30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон
      </Description>
      <SeparatorLine />
      <Price>420 руб</Price>
    </OrderSummaryContainer>
  );
};
