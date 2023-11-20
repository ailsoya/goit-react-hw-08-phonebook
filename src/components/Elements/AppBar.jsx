import { Navigation } from './Navigation'
import { UserMenu } from './UserMenu'
import { AuthNav } from './AuthNav'
import { useAuth } from 'hooks/useAuth'
import styles from '../Style.module.css'

export const AppBar = () => {
  const { isLoggedIn } = useAuth()

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}
