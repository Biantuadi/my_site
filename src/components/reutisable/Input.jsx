import React from "react";
import styled from "styled-components";
import { theme } from "../../themes";

export default function Input({ onChange, value, ...props }) {
  return <InputStyled {...props} onChange={onChange} value={value} />;
}

const InputStyled = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.secondary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 728px) {
    width: 65%;

  }
`;
