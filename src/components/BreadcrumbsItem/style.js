import styled, { css } from "styled-components";

export const Item = styled.li`
  align-items: center;
  display: inline-flex;
  margin: 4rem 0 6rem;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #a7adbc;

  :hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.active &&
    css`
      color: #303749;
    `}
`;

export const Icon = styled.svg`
  fill: #5580f5;
  height: 1rem;
  margin: 0 0.8rem;
  width: 1rem;
`;
