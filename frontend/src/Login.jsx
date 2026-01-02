import { useState } from 'react'
import api from './api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {
    try {
      const res = await api.post('/login', {
        username: username,
        password: password
      })
      localStorage.setItem('token', res.data.token)
      alert('Login successful')
      setUsername('')
      setPassword('')
    } catch (error) {
      alert('Login failed')
    }
  }

  return (
    <div>
      <h3>Login</h3>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login
