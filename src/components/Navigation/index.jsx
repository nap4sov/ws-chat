import { StyledLink, StyledNav } from './styles';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Home
      </StyledLink>
      <StyledLink
        to="/chat"
        end
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Chat
      </StyledLink>
    </StyledNav>
  );
};
