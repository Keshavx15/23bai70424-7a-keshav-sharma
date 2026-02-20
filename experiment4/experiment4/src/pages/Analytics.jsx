import { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { AppContext } from '../context/AppContext'
import { Container, Typography, Button, TextField, Box } from '@mui/material'

function Analytics() {
  const { state, dispatch, completedTasks } = useContext(AppContext)
  const [task, setTask] = useState('')

  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Task Analytics
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="New Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={() => {
              if (!task) return
              dispatch({ type: 'ADD_TASK', payload: task })
              setTask('')
            }}
          >
            Add
          </Button>
        </Box>

        {state.tasks.map(task => (
          <Box key={task.id} sx={{ display: 'flex', gap: 2, mb: 1 }}>
            <Typography sx={{ flexGrow: 1 }}>
              {task.text}
            </Typography>
            <Button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
              Delete
            </Button>
          </Box>
        ))}

        <Typography sx={{ mt: 3 }}>
          Total Tasks: {state.tasks.length}
        </Typography>

        <Typography>
          Completed Tasks: {completedTasks}
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default Analytics