import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container, Typography } from '@mui/material'

function Projects() {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">
          Projects Page
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default Projects