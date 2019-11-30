import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Badge = styled.span`
  background-color: #5486F5;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: block;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;
  
  position: absolute;
  right: -1rem;
  top: -1rem;
`;

export const Info = styled.div`
  flex: 1;
  padding: 0 1.2rem;
`;

export const Img = styled.div`
  background-image: url("https://thumbor.thedailymeal.com/TVQFP3COexF4-QZThSawG5Je3AQ=/870x565/filters:focal(895x581:896x582)/https://www.thedailymeal.com/sites/default/files/story/2017/4568843-untitled_design_3.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 6.2rem;
  width: 6.2rem;
  border: 1px solid #E3E4EC;
  border-radius: 4px;
`;