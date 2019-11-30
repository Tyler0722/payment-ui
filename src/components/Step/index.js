import React from "react";
import styled, { css } from "styled-components";

export const Circle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: #dce2ee;
`;

export const StyledStep = styled.div`
  display: inline-block;
  margin-left: auto;
  position: relative;

  span {
    position: absolute;
    width: max-content;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    color: #A8ACC0;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1;
    display: block;
    padding-top: 0.8rem;
  }

  :first-child {
    margin-left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      ${Circle} {
        background-color: #fff;
        border: 0.4rem solid #5580f5;
      }
    `}

  ${(props) =>
    props.completed &&
    css`
      ${Circle} {
        background-color: #5580f5;
      }
    `}
`;

const Step = ({ children, index, active, completed, disabled }) => {
  return (
    <StyledStep active={active} completed={completed}>
      <Circle />
      <span>{children}</span>
    </StyledStep>
  );
};

export default Step;
