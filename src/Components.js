import styled from '@emotion/styled';

export const OneDiv = styled.div`
  color: black;
  border-radius: 15px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  width: 400px;
  height: 200px;
`;

export const Button = styled.div`
  color: black;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border: 3px solid gray;
  border-radius: 15px;
  width: 120px;
  height: 60px;
`;
