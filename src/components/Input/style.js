import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid #cfd1e1;
  border-radius: 4px;
  height: 4.4rem;
  width: 100%;
  color: #273657;
  font-weight: 500;
  padding: 0 2rem;
  box-shadow: none;
  -webkit-appearance: none;

  ::-webkit-input-placeholder {
    color: #cfd1e1;
  }

  :focus {
    border-color: #688ff6;
  }
`;
