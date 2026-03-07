import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/appSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export default store