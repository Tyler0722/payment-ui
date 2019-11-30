import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const StyledHeading = styled(
  ({ element: Element, className, children }) => (
    <Element className={className}>{children}</Element>
  )
)``;

const Heading = (props) => {
  const { children } = props;
  return <StyledHeading>{children}</StyledHeading>;
};

Heading.propTypes = {};

export default Heading;
