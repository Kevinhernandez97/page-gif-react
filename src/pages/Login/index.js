import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../components/hooks/useUser'

export default function Login() {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [, navigate] = useLocation()
  const {login, isLogged} = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = e => {
    e.preventDefault()
    login({ username, password})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        onChange={e => setUserName(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button>Login</button>
    </form>
  )
}
