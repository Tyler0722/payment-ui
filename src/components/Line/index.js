import React from "react";
import styled from "styled-components";

const StyledLine = styled.hr`
  display: block;
  border: none;
  height: 1px;
  background-color: #e3e5ea;
  margin-bottom: ${(props) => props.spaceAfter || 0}px;
`;

export default StyledLine;
