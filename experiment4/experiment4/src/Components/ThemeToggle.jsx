import { Button } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function ThemeToggle() {
  const { dispatch } = useContext(AppContext)

  return (
    <Button color="inherit" onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Toggle Theme
    </Button>
  )
}

export default ThemeToggle