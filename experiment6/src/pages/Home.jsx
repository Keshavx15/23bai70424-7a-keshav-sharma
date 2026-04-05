import Navbar from '../Components/Navbar'
import { Container, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4">
          Welcome to Experiment 6
        </Typography>
      </Container>
    </>
  )
}

export default Home