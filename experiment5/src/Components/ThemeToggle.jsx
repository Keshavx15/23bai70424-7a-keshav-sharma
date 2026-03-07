import { useContext } from 'react'
import { Button } from '@mui/material'
import { AppContext } from '../context/AppContext'

function ThemeToggle() {
  const { toggleTheme } = useContext(AppContext)

  return (
    <Button color="inherit" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  )
}

export default ThemeToggle