import styled from "styled-components";
import backButton from "./assets/back-button.svg";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: none;
`;

export const BackButton = () => {
  return (
    <StyledButton>
      <img src={backButton} alt="back icon" />
    </StyledButton>
  );
};
