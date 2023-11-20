import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/operations'
import { useAuth } from 'hooks/useAuth'
import styles from '../Style.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch()
  const { user } = useAuth()

  return (
    <div className={styles.Wrapper}>
      <p className={styles.Email}>{user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
