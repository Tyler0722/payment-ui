import React from "react";

import * as Styled from "./style";

const Input = ({ placeholder, onFocus, onBlur, autoFocus, id, name }) => {
  return (
    <Styled.Input
      onFocus={onFocus}
      onBlur={onBlur}
      spellCheck={false}
      placeholder={placeholder}
      autoFocus={autoFocus}
      id={id}
      name={name}
    />
  );
};

export default Input;
