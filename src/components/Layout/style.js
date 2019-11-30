import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  max-width: 120rem;
  grid-template-columns: 1fr 48rem;
  grid-column-gap: 3rem;
  padding-bottom: 20rem;

  ${(props) => {
    console.log(props);
  }}
`;
