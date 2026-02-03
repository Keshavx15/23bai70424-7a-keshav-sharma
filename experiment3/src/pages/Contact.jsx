import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import { Container, Typography, TextField, Button, Box } from '@mui/material'

function Contact() {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6, maxWidth: 'sm' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Message" multiline rows={4} fullWidth />
          <Button variant="contained">Send Message</Button>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Contact
