import styled, { css } from "styled-components";

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 2.2rem;
`;

export const I = styled.div`
  background-color: #dce2ee;
  height: 0.4rem;
  width: 33.33%;
  border-radius: 1000px;
  margin: 0 -0.4rem;

  ${(props) =>
    props.completed &&
    css`
      background-color: #5580f5;
    `}
`;
