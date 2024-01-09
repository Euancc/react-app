import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  const [alertvisible, setAlertVisibility] = useState(false)
  return (
    <div>
      {alertvisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Do it</Button>
    </div>
  )
}

export default App
