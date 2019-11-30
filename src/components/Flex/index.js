import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  margin-bottom: ${(props) => props.spaceAfter || 0}px;

  button {
    margin-left: 1.2rem;
  }
`;

export default Flex;
