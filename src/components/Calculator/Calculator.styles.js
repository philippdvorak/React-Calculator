import styled from "styled-components";

export const Grid = styled.div`
  background: linear-gradient(-135deg, darkblue, blue);
  border-radius: 25px;
  box-shadow: 10px 10px 50px rgba(0,0,0,.25),
              -10px -10px 50px rgba(0,0,0,.25);
`;

export const Buttons = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
`;