import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: cornflowerblue;
  }
`

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </div>
  )
}