import { Card, CardContent, Typography } from '@mui/material'

function CardComponent({ name, email }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>{email}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardComponent