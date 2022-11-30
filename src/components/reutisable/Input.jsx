import React from "react";
import styled from "styled-components";

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
  }
`;
