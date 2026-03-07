import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container, Typography } from '@mui/material'

function Analytics() {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4">
          Analytics Page
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default Analytics