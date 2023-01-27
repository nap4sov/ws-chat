import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: color 250ms ease, background-color 250ms ease;

  &:hover {
    background-color: #94bbe9;
    color: black;
  }
`;
