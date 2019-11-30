import styled, { css } from "styled-components";

export const Name = styled.div`
  display: flex;
  padding: 1.2rem 0 2rem 1.2rem;

  :before,
  :after {
    background-color: #eff0f4;
    content: "";
    display: block;
    height: 0.8rem;
    width: 5rem;
  }

  :before {
    margin-right: 0.8rem;
    width: 3rem;
  }
`;

export const Chip = styled.div`
  background-color: #eaebef;
  border-radius: 6px;
  height: 3rem;
  margin-bottom: 1.4rem;
  margin-left: 1.2rem;
  width: 4rem;
`;

export const Group = styled.div`
  align-items: center;
  border-radius: 6px;
  display: flex;
  line-height: 1;
  padding: 1.4rem 1.2rem;
  width: max-content;
  border: 2px solid transparent;

  ${(props) =>
    props.active
      ? css`
          background-color: #e7edfd;
          border-color: #688ff6;
          color: #cbd3e9;
        `
      : null}

  &.hii {
    margin-bottom: 2rem;
  }
`;

export const Placeholder = styled.div`
  background-color: currentColor;
  border-radius: 1000px;
  display: inline-block;
  height: 1rem;
  margin-right: ${(props) => props.spaceRight || 0}px;
  width: ${(props) => props.width || 50}px;
  vertical-align: middle;
`;

export const Back = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  right: 0;
  border-radius: 6px;
  padding-top: 2rem;
  z-index: 30;
`;

export const Stripe = styled.div`
  background-color: #c8ccd7;
  height: 4rem;
  width: 100%;
`;

export const Signature = styled.div`
  display: flex;
  border-radius: 6px;
  background-color: #eef0f4;
  max-width: 20rem;
  align-items: center;
  margin: 1.4rem 1.2rem;
  justify-content: flex-end;
`;

export const Front = styled.div`
  backface-visibility: hidden;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid #c8ccd7;
  max-width: 31rem;
  padding: 0.8rem 2rem;
  color: #d9dce3;
  position: relative;
  transition: all 0.8s ease;
  transform-style: preserve-3d;

  svg {
    fill: #c8ccd7;
    height: 1.8rem;
    display: block;
    right: 1.4rem;
    backface-visibility: hidden;
    position: absolute;
    bottom: calc(0.8rem + ((4rem - 1.8rem) / 2));
  }
`;

export const CardWrap = styled.div`
  perspective: 100vh;
  width: max-content;

  ${(props) =>
    props.flip
      ? css`
          ${Card} {
            transform: rotateY(180deg);
          }
        `
      : null}
`;

export const Expiry = styled(Group)`
  position: absolute;
  bottom: 0;
  left: 12.4rem;
  margin: 0;
  bottom: 3.8rem;
`;
