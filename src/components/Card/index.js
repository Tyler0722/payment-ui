import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./style";

const Card = ({ selected }) => {
  return (
    <Styled.CardWrap flip={selected === "cvc"}>
      <Styled.Card>
        <Styled.Front>
          <Styled.Name />
          <Styled.Chip />
          <Styled.Group active={selected === "ccn"} className="hii">
            <Styled.Placeholder spaceRight={14} />
            <Styled.Placeholder spaceRight={14} />
            <Styled.Placeholder spaceRight={14} />
            <Styled.Placeholder />
          </Styled.Group>
          <Styled.Expiry active={selected === "exp"}>
            <Styled.Placeholder width={30} />
          </Styled.Expiry>
          <Styled.Group active={selected === "name"}>
            <Styled.Placeholder spaceRight={8} width={30} />
            <Styled.Placeholder />
          </Styled.Group>
          <svg viewBox="0 16.553998947143555 47.83399963378906 14.725000381469727">
            <polygon points="19.153,16.799 16.722,31.065 20.61,31.065 23.043,16.799 		"></polygon>
            <path
              d="M13.462,16.815l-3.808,9.729l-0.406-1.469c-0.751-1.77-2.883-4.312-5.386-5.914l3.482,11.897l4.114-0.007l6.123-14.239
			L13.462,16.815z"
            ></path>
            <path d="M7.772,17.836c-0.226-0.869-0.881-1.128-1.694-1.159H0.05L0,16.961c4.691,1.138,7.795,3.88,9.083,7.177L7.772,17.836z"></path>
            <path
              d="M30.923,19.534c1.272-0.02,2.194,0.258,2.91,0.546l0.351,0.165l0.526-3.092c-0.77-0.289-1.977-0.599-3.483-0.599
			c-3.842,0-6.55,1.935-6.571,4.708c-0.025,2.049,1.929,3.193,3.405,3.876c1.515,0.7,2.023,1.145,2.016,1.77
			c-0.012,0.955-1.208,1.393-2.325,1.393c-1.557,0-2.384-0.215-3.661-0.747l-0.501-0.228l-0.547,3.193
			c0.91,0.399,2.589,0.742,4.332,0.76c4.087,0,6.743-1.912,6.771-4.875c0.017-1.621-1.02-2.858-3.267-3.873
			c-1.36-0.662-2.192-1.102-2.184-1.77C28.695,20.168,29.401,19.534,30.923,19.534z"
            ></path>
            <path
              d="M44.688,16.815h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
			c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.815z M39.893,26.01
			c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z"
            ></path>
          </svg>
        </Styled.Front>
        <Styled.Back>
          <Styled.Stripe></Styled.Stripe>
          <Styled.Signature>
            <Styled.Placeholder />
            <Styled.Group active={selected === "cvc"}>
              <Styled.Placeholder width={30} />
            </Styled.Group>
          </Styled.Signature>
        </Styled.Back>
      </Styled.Card>
    </Styled.CardWrap>
  );
};

Card.propTypes = {
  selected: PropTypes.oneOf(["ccn", "name", "exp", "cvc"])
};

export default Card;
