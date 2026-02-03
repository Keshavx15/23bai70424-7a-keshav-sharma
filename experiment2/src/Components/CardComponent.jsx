import { Card, CardContent, Typography } from '@mui/material'

function CardComponent({ title, text }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardComponent
