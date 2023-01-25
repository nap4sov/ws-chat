import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: white;
  height: 60px;
  width: 100%;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: 200px;
  padding: 0 20px;
  margin-left: auto;
`;

export const AuthButton = styled.button`
  cursor: pointer;
  min-width: 100px;
  margin-left: auto;
  border: none;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background-color: #94bbe9;
  transition: color 300ms ease, background-color 300ms ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const AvatarWrapper = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;
