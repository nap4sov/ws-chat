import styled from 'styled-components';

export const ChatWrapper = styled.div`
  //   border: 2px solid black;
  //   border-radius: 10px;
  //   overflow: hidden;
`;

export const MessagesWrapper = styled.div`
  padding: 10px;
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export const MessageForm = styled.form`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 10px;
  padding: 20px;
`;

export const SingleMessageBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  padding: 10px;
  ${({ isCurrentUser }) =>
    isCurrentUser
      ? `
        flex-direction: row-reverse;`
      : ``}
`;
export const SingleMessage = styled.div`
  display: inline-flex;
  max-width: 50%;
  padding: 10px;
  border-radius: 20px;
  ${({ isCurrentUser }) =>
    isCurrentUser
      ? `
        background-color: white;
        color: black;
        border-bottom-right-radius: 0;
    `
      : `
    background-color: black;
        color: white;
        border-bottom-left-radius: 0;
    `}
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Time = styled.div`
  font-size: 10px;
`;

export const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding: 10px;
`;

export const SendButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #94bbe9;
  cursor: pointer;

  transition: color 300ms ease, background-color 300ms ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;
