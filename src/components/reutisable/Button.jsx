import styled from "styled-components";
import { theme } from "../../themes";

export default function Button({ label, disabled, ...others }) {
  return <ButtonStyled disabled {...others}>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  padding: 15px;
  font-weight: 700;
  color: ${theme.colors.white};
  background-color: ${theme.colors.lighten_primary};
  border: none;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary};
  }

  
`;
