import styled from "styled-components";

export const CalcButton = styled.button`
  height: 100px;
  width: 100px;
  font-size: 50px;
  font-weight: bold;
  background-color: transparent;
  margin: 1px;
  border-radius: 50px;
  border: none;
  user-select: none;
  cursor: pointer;
  color: #eee;
  transition: all .5s;

  &:hover {
    color: white;
    transition: all .5s;
  }
`;