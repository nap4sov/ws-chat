import { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { io } from 'socket.io-client';
import {
  ChatWrapper,
  MessagesWrapper,
  MessageForm,
  StyledInput,
  SendButton,
} from './styles';
import { Message } from './Message.jsx';

const socket = io('https://nest-demo-server.herokuapp.com');

export const Chat = () => {
  const [message, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const { user } = useAuth0();
  const dummy = useRef(null);

  const handleReceiveHistory = response => {
    setMessageHistory(response);
  };

  const handleReceiveMessage = response => {
    setMessageHistory(prev => [...prev, response]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!message || !user) return;

    socket.emit('message', {
      message,
      nickname: user?.nickname,
      avatar: user?.picture,
    });
    setMessage('');
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected');
    });
    socket.on('disconnect', () => {
      console.log('Disconnected');
    });
    socket.emit('requestHistory');
    socket.on('messageHistory', handleReceiveHistory);
    socket.on('recMessage', handleReceiveMessage);

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('recMessage');
    };
  }, []);

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messageHistory]);

  return (
    <ChatWrapper>
      <MessagesWrapper>
        {messageHistory.map(({ message, nickname, avatar, createdAt }, idx) => (
          <Message
            isCurrentUser={nickname === user?.nickname}
            avatar={avatar}
            createdAt={createdAt}
            key={message + idx}
          >
            {message}
          </Message>
        ))}
        <div ref={dummy} />
      </MessagesWrapper>
      <MessageForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <SendButton type="submit">Send</SendButton>
      </MessageForm>
    </ChatWrapper>
  );
};
