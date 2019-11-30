import React from "react";

import * as Styled from "./style";

const I = ({ active, completed, index }) => {
  return <Styled.I completed={completed || active}></Styled.I>;
}

const StepProgress = ({ activeStep = 2, children }) => {
  const childrenArray = React.Children.toArray(children);

  const steps = childrenArray.map((step, index) => {
    const state = {
      index,
      active: activeStep === index,
      completed: activeStep > index,
      disabled: activeStep < index
    };

    const connectors = [];

    if (index !== 0) {
      
    }

    return [
      index !== 0 ? React.cloneElement(<I />, { ...state }) : null,
      React.cloneElement(step, { ...state, ...step.props })
    ];
  });

  return <Styled.Stepper>{steps}</Styled.Stepper>;
};

export default StepProgress;
