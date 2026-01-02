import { useState } from 'react'
import api from './api'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async () => {
    try {
      const res = await api.post('/register', {
        username,
        password
      })

      if (res.data.error) {
        alert(res.data.error)
      } else {
        alert('User registered successfully')
        setUsername('')
        setPassword('')
      }
    } catch (err) {
      alert('Registration failed')
    }
  }

  return (
    <div>
      <h3>Register</h3>

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

      <button onClick={registerUser}>Register</button>
    </div>
  )
}

export default Register
