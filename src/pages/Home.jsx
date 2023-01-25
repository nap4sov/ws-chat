import styled from 'styled-components';

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
  return (
    <div>
      <StyledHeading>Support me 😉</StyledHeading>
      <StyledImage src="/img/qr.png" />
    </div>
  );
};

export default Home;
