import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { RequestStats } from '../components/RequestStats';

const StyledHeading = styled.h1`
  text-align: center;
  margin: 20px 0;
`;
const StyledImage = styled.img`
  display: block;
  width: 300px;
  margin: 0 auto;
`;

const Home = () => {
  const { user } = useAuth0();

  return (
    <div>
      {user && <RequestStats email={user.email} />}
      <StyledHeading>Support me 😉</StyledHeading>
      <StyledImage src="/img/qr.png" />
    </div>
  );
};

export default Home;
