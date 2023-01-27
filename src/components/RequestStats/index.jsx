import { useState } from 'react';
import axios from 'axios';
import { notifyError } from '../../utils/notifications';
import { StyledContainer, StyledButton, SuccessWrapper } from './styles';

axios.defaults.baseURL = 'https://nest-demo-server.herokuapp.com';

export const RequestStats = ({ email }) => {
  const [isSent, setIsSent] = useState(false);

  const handleButtonClick = async () => {
    try {
      await axios.post('/mailing/stats', { email });
      setIsSent(true);
    } catch (error) {
      console.error(error);
      notifyError("Dude, you've broken my app :(");
    }
  };

  return (
    <StyledContainer>
      {isSent ? (
        <SuccessWrapper>Good job</SuccessWrapper>
      ) : (
        <StyledButton onClick={handleButtonClick}>
          Send me an email with BTC stats!
        </StyledButton>
      )}
    </StyledContainer>
  );
};
