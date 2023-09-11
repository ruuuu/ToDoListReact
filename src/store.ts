// хранилище сотояний:
import { configureStore } from '@reduxjs/toolkit'



// создаем базовое состояниие:
export const store = configureStore({
  reducer: {},  // Здесь хранятся все состоняия
})




export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch