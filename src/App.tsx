import Button from '@mui/material/Button'
import { useAppSelector, useAppDispatch } from './hooks'
import { incrementBy } from './features/counter/counterSlice'
import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(incrementBy(2))
  }

  return (
    <div className="App">
      <div className="logo">🥑</div>
      <h1>Fcking Avocado</h1>
      <div className="card">
        <Button variant="contained" onClick={handleClick}>
          {count} Avocados
        </Button>
      </div>
    </div>
  )
}

export default App
