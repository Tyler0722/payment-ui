import React from "react";
import styled from "styled-components";

import { CartItem, Flex, Line, Input, Button } from "components";

const Styled = {};

Styled.Panel = styled.div`
  border-radius: 8px;
  padding: 4rem 3rem;
  box-shadow: 0 0px 50px -12px rgba(0, 0, 0, 0.25) !important;
`;

const OrderSummary = (props) => {
  return (
    <Styled.Panel>
      <CartItem />
      <Line spaceAfter={30} />
      <Flex spaceAfter={30}>
        <Input placeholder="Gift card or discount code" />
        <Button size="small" light={true}>
          Apply
        </Button>
      </Flex>
      <Line spaceAfter={30} />
      <Flex spaceAfter={12}>
        <span>Subtotal</span>
        <span>$4.59</span>
      </Flex>
      <Flex spaceAfter={30}>
        <span>Shipping</span>
        <span>$7.95</span>
      </Flex>
      <Line spaceAfter={30} />
      <Flex spaceAfter={30}>
        <span>Total</span>
        <span>
          <span>USD</span> $15.75
        </span>
      </Flex>
    </Styled.Panel>
  );
};

export default OrderSummary;
