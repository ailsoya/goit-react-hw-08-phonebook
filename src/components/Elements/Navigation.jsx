import { NavLink } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import styled from "styled-components"

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

export const Navigation = () => {
  const { isLoggedIn } = useAuth()

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  )
}
