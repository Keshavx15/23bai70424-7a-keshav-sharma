import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        <Button color="inherit" component={Link} to="/reports">Reports</Button>

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar