import React, { useState } from "react";
import styled, { css } from "styled-components";

const StyledRadioButton = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  border: 2px solid #c5ccd6;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          border: 6px solid #5580f5;
        `
      : null}
`;

const RadioButton = ({ onClick, value }) => {
  const [selected, setSelected] = useState(false);

  const toggle = (event) => {
    setSelected(!selected);
    onClick(event);
  };

  return <StyledRadioButton value={value} onClick={toggle} selected={selected} />;
};

export default RadioButton;
