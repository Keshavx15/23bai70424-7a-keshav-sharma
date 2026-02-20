import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4">
          Home Page
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default Home