import { configureStore } from '@reduxjs/toolkit'
import tarefasRedu from './reducers/tarefas'
const store = configureStore({
  reducer: {
    tarefas: tarefasRedu
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
