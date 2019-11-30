import React from "react";

import * as Styled from "./style";

const Breadcrumbs = ({ children }) => {
  return (
    <Styled.Breadcrumbs arial-label="Breadcrumb" role="navigation">
      <Styled.List>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            active: index === React.Children.count(children) - 1,
            key: index
          })
        )}
      </Styled.List>
    </Styled.Breadcrumbs>
  );
};

export default Breadcrumbs;
