import { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, toggleTask, deleteTask } from '../redux/slices/appSlice'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container, Typography, TextField, Button, Box } from '@mui/material'

function Reports() {
  const [task, setTask] = useState('')
  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()

  const completed = useMemo(
    () => tasks.filter(t => t.completed).length,
    [tasks]
  )

  return (
    <>
      <Navbar />

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Reports (Task Manager)
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="New Task"
            value={task}
            onChange={e => setTask(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={() => {
              dispatch(addTask(task))
              setTask('')
            }}
          >
            Add
          </Button>
        </Box>

        {tasks.map(t => (
          <Box key={t.id} sx={{ display: 'flex', gap: 2, mb: 1 }}>
            <Typography sx={{ flexGrow: 1 }}>
              {t.text}
            </Typography>

            <Button onClick={() => dispatch(toggleTask(t.id))}>
              {t.completed ? 'Undo' : 'Complete'}
            </Button>

            <Button onClick={() => dispatch(deleteTask(t.id))}>
              Delete
            </Button>
          </Box>
        ))}

        <Typography sx={{ mt: 3 }}>
          Total Tasks: {tasks.length}
        </Typography>

        <Typography>
          Completed Tasks: {completed}
        </Typography>
      </Container>

      <Footer />
    </>
  )
}

export default Reports