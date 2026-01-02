import { useState } from 'react'
import api from './api'

function CreateSurvey() {
  const [title, setTitle] = useState('')

  const createSurvey = async () => {
    try {
      await api.post('/survey', {
        title: title
      })
      alert('Survey created')
      setTitle('')
    } catch (error) {
      alert('Failed to create survey')
    }
  }

  return (
    <div>
      <h3>Create Survey</h3>

      <input
        type="text"
        placeholder="Survey title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <button onClick={createSurvey}>Create Survey</button>
    </div>
  )
}

export default CreateSurvey
