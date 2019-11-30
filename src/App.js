import React from "react";

import GlobalStyle from "./GlobalStyle";

import {
  Card,
  Label,
  Input,
  RadioButton,
  Flex,
  Step,
  Breadcrumbs,
  BreadcrumbsItem,
  Checkbox,
  Button,
  Layout,
  StepProgress,
  CartItem,
  OrderSummary
} from "components";

export const Styled = {};

const steps = ["Shipping Method", "Payment & Billing", "Review Order", "Complete Order"];

import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  position: relative;
`;

export const Steps = styled.div`
  padding: 3rem 0;
  background-color: #eff2f9;

  ${Container} {
    max-width: 65.2rem;
  }
`;

Styled.Panel = styled.div`
  padding: 8rem 8rem 12rem;
`;

const Text = styled.p`
  color: #9599a6;
  margin-bottom: 24px;
  font-weight: 500;
`;

Styled.CardWrap = styled.div`
  margin: 0 auto;
  max-width: max-content;
  margin-bottom: 8rem;
`;

Styled.Box = styled.div`
  align-items: center;
  display: flex;
  padding: 2rem;

  img,
  span {
    height: 2rem;
    margin-left: 1.2rem;
  }
`;

Styled.Panell = styled.div`
  box-shadow: 0 0px 50px -12px rgba(0, 0, 0, 0.25) !important;
  border-radius: 8px;
`;

Styled.Line = styled.hr`
  display: block;
  border: none;
  height: 1px;
  background-color: #e3e5ea;
  margin-bottom: ${(props) => props.spaceAfter || 0}px;
`;

Styled.Bottom = styled.div`
  display: grid;
  padding-top: 3rem;
  grid-template-columns: 1fr repeat(2, 9rem);
  grid-column-gap: 1.2rem;
`;

Styled.BackLink = styled.a`
  color: #5580f5;
  line-height: 1;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

Styled.Title = styled.h3`
  color: #303749;
  font-weight: 500;
  font-size: 2.2rem;
  margin-bottom: ${(props) => props.spaceAfter || false};
`;

const App = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <GlobalStyle />
      <Steps>
        <Container>
          <StepProgress>
            {steps.map((step) => (
              <Step>{step}</Step>
            ))}
          </StepProgress>
        </Container>
      </Steps>
      <Container>
        <Breadcrumbs>
          <BreadcrumbsItem href="/">Cart</BreadcrumbsItem>
          <BreadcrumbsItem href="/">Customer information</BreadcrumbsItem>
          <BreadcrumbsItem href="/">Shipping method</BreadcrumbsItem>
          <BreadcrumbsItem href="/">Payment method</BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Layout type="payment">
        <div>
          <Styled.Title spaceAfter={"4px"}>Payment method</Styled.Title>
          <Text>All transactions are secure and encrypted. Credit card information is never stored.</Text>
          <Styled.Panell>
            <Styled.Box>
              <RadioButton value="paypal" />
              <img src={require("./assets/images/paypal.svg")} alt="PayPal" />
            </Styled.Box>
            <Styled.Line />
            <Styled.Box>
              <RadioButton value="amazonPay" />
              <img src={require("./assets/images/amazon_pay.svg")} alt="Amazon Pay" />
            </Styled.Box>
            <Styled.Line />
            <Styled.Box className="hi">
              <RadioButton value="card" />
              <span>Credit Card</span>
            </Styled.Box>
            <Styled.Line />
            <Styled.Panel>
              <Styled.CardWrap>
                <Card selected={selected} />
              </Styled.CardWrap>
              <div>
                <Label>card number</Label>
                <Input
                  onFocus={() => setSelected("ccn")}
                  onBlur={() => setSelected(null)}
                  placeholder="Michael Jordan"
                  autoFocus={true}
                  id="name"
                  name="name"
                />
              </div>
              <Styled.Bottom>
                <div>
                  <Label>card holder</Label>
                  <Input
                    onFocus={() => setSelected("name")}
                    onBlur={() => setSelected(null)}
                    placeholder="Michael Jordan"
                    autoFocus={true}
                    id="name"
                    name="name"
                  />
                </div>
                <div>
                  <Label>exp. date</Label>
                  <Input
                    onFocus={() => setSelected("exp")}
                    onBlur={() => setSelected(null)}
                    placeholder="03/20"
                    autoFocus={true}
                    id="name"
                    name="name"
                  />
                </div>
                <div>
                  <Label>cvc</Label>
                  <Input
                    onFocus={() => setSelected("cvc")}
                    onBlur={() => setSelected(null)}
                    placeholder="****"
                    autoFocus={true}
                    id="name"
                    name="name"
                  />
                </div>
              </Styled.Bottom>
            </Styled.Panel>
          </Styled.Panell>
          <Styled.Title spaceAfter="24px">Billing address</Styled.Title>
          <div>
            <Styled.Box>
              <RadioButton value="sameAddress" />
              <span>Same as shipping address</span>
            </Styled.Box>
            <Styled.Line />
            <Styled.Box>
              <RadioButton value="diffAddress" />
              <span>Use a different shipping address</span>
            </Styled.Box>
          </div>
          <Checkbox label="Subscribe to our newsletter." />
          <Flex>
            <Styled.BackLink href="/">Return to shipping method</Styled.BackLink>
            <Button>Complete order</Button>
          </Flex>
        </div>
        <div>
          <h5>Order summary</h5>
          <OrderSummary />
        </div>
      </Layout>
    </>
  );
};

export default App;
