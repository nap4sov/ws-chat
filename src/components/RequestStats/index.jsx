import axios from 'axios';
import { notifyError } from '../../utils/notifications';
import { StyledContainer, StyledButton } from './styles';

axios.defaults.baseURL = 'https://nest-demo-server.herokuapp.com';

export const RequestStats = ({ email }) => {
  const handleButtonClick = async () => {
    try {
      await axios.post('/mailing/stats', { email });
    } catch (error) {
      console.error(error);
      notifyError("Dude, you've broken my app :(");
    }
  };

  return (
    <StyledContainer>
      <StyledButton onClick={handleButtonClick}>
        Send me an email with BTC stats!
      </StyledButton>
    </StyledContainer>
  );
};
