import React from "react";

import * as Styled from "./style";

export const LAYOUT_SETTINGS = {
  payment: {
    columns: "1fr 48rem",
    columnGap: "3rem",
    maxWidth: "120rem",
    layoutColumns: {
      0: {
        element: "main"
      },
      1: {
        element: "aside"
      }
    }
  }
};

const getChildrenProps = (type, index) => {
  if (LAYOUT_SETTINGS[type].layoutColumns && LAYOUT_SETTINGS[type].layoutColumns[index]) {
    return LAYOUT_SETTINGS[type].layoutColumns[index];
  }
  return null;
};

const Layout = ({ type, children }) => (
  <Styled.Layout type={type} {...LAYOUT_SETTINGS[type]}>
    {React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        ...getChildrenProps(type, index)
      });
    })}
  </Styled.Layout>
);

export default Layout;
