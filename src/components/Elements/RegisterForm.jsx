import { useDispatch } from 'react-redux'
import { register } from 'redux/auth/operations'
import styles from '../Style.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={styles.formReg}>
      <label className={styles.labelReg}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={styles.labelReg}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.labelReg}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" className={styles.SubmitButton}>Register</button>
    </form>
  )
}
