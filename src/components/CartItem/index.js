import React from "react";

import * as Styled from "./style";

const CartItem = ({}) => {
  return (
    <Styled.CartItem>
      <div
        style={{
          position: "relative"
        }}
      >
        <Styled.Img></Styled.Img>
        <Styled.Badge>3</Styled.Badge>
      </div>
      <Styled.Info>
        <h5>Chips Ahoy Cookies</h5>
        <span>Original</span>
      </Styled.Info>
      <p>$2.49</p>
    </Styled.CartItem>
  );
};

export default CartItem;
