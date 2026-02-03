import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import CardComponent from '../Components/CardComponent'
import Footer from '../Components/Footer'
import { Container, Grid } from '@mui/material'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardComponent
              title="Fast Performance"
              text="Optimized UI for smooth experience."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent
              title="Modern Design"
              text="Clean and minimal user interface."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent
              title="Responsive Layout"
              text="Works perfectly on all devices."
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home
