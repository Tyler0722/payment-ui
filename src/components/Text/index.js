import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledText = styled(({ element: Element, className, children }) => (
  <Element className={className}>{children}</Element>
))`
  color: ${(props) => props.theme.colors.fog};
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.size}rem;
  text-transform: ${(props) => props.uppercase && "uppercase"};
  margin-bottom: ${(props) =>
    props.spaceAfter ? `${props.spaceAfter}rem` : null};
`;

const Text = (props) => {
  const {
    children,
    element = "p",
    size = 1.6,
    align = "left",
    uppercase = false,
    spaceAfter
  } = props;
  return (
    <StyledText
      element={element}
      size={size}
      align={align}
      uppercase={uppercase}
      spaceAfter={spaceAfter}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {};

export default Text;
