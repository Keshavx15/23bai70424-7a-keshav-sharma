import { Box, Typography, Button } from '@mui/material'

function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
        color: '#fff',
        px: 2
      }}
    >
      <Typography variant="h3" gutterBottom>
        Build Faster with StartupX
      </Typography>
      <Typography variant="h6" gutterBottom>
        Modern UI solutions for modern businesses
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        Get Started
      </Button>
    </Box>
  )
}

export default HeroSection
