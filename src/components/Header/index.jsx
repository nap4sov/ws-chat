import { useAuth0 } from '@auth0/auth0-react';
import { Navigation } from '../Navigation';
import { AuthButton, AvatarWrapper, StyledHeader, UserInfo } from './styles';

export const Header = () => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

  return (
    <StyledHeader>
      <Navigation />
      <UserInfo>
        <AvatarWrapper src={user?.picture} />
        <AuthButton
          onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </AuthButton>
      </UserInfo>
    </StyledHeader>
  );
};
