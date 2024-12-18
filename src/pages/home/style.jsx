import styled from "styled-components";

const Button = styled.button`
  width: 219px;
  height: 64px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  background-color: #444cfc;
  color: #ffffff;
  border: none;
  display: flex;

  align-items: center;
  gap: 16px;
  &:hover {
    background-color: red;
    color: blue;
  }
`;
const Bottom = styled.div`
  width: 1280px;
  height: 106px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { Button, Bottom };
