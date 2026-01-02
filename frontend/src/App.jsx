import Register from './Register'
import Login from './Login'
import CreateSurvey from './CreateSurvey'
import Results from './Results'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Survey Application</h1>

      <Register />
      <Login />
      <CreateSurvey />
      <Results />
    </div>
  )
}

export default App
