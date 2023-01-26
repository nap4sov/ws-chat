import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { notifyWarning } from '../utils/notifications';
import { Chat } from '../components/Chat';

const ChatPage = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/');
      notifyWarning('Please log in to use the chat');
    }
  }, [user, isLoading, navigate]);

  return <Chat />;
};

export default ChatPage;
