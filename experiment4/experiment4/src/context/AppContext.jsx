import { createContext, useReducer, useMemo } from 'react'
import appReducer from '../reducer/appReducer'

export const AppContext = createContext()

const initialState = {
  theme: 'light',
  tasks: []
}

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const completedTasks = useMemo(
    () => state.tasks.filter(t => t.completed).length,
    [state.tasks]
  )

  return (
    <AppContext.Provider value={{ state, dispatch, completedTasks }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider