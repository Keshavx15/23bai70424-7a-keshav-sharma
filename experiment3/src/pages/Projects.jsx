import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CardComponent from '../Components/CardComponent'
import { Container, Typography, Grid } from '@mui/material'

function Projects() {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardComponent title="Web Platform" text="Modern web solution." />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardComponent title="Mobile App" text="Cross-platform application." />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Projects
