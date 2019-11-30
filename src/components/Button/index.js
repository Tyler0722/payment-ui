import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: #5581f5;
  color: #fff;
  line-height: 5rem;
  padding: 0 3rem;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;

  ${(props) =>
    props.light
      ? css`
          background-color: #d0dcf5;
          color: #5581f5;
          line-height: 4.4rem;
        `
      : null}
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
