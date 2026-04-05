import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import CardComponent from '../Components/Card'
import { Container, Grid, Typography } from '@mui/material'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Users Data (API)
        </Typography>

        <Grid container spacing={3}>
          {users.map(user => (
            <Grid item xs={12} md={4} key={user.id}>
              <CardComponent name={user.name} email={user.email} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Users