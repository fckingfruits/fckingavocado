import { useState } from 'react'
import Button from '@mui/material/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  return (
    <div className="App">
      <div className="logo">🥑</div>
      <h1>Fcking Avocado</h1>
      <div className="card">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          {count} Avocados
        </Button>
      </div>
    </div>
  )
}

export default App
