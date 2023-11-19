import { useDispatch } from 'react-redux'
import { useAuth } from 'hooks/useAuth'

export const UserMenu = () => {
  const dispatch = useDispatch()
  const { user } = useAuth()

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button">
        Logout
      </button>
    </div>
  );
};
