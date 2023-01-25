import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;

  &.active {
    color: red;
  }
`;
