// хранилище состояний:
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage';


// state: { 
//   todoList:
//     { todos: 
//       [
//         {id: 0, text: 'task1', isDone: true},  
//         {id: 1, text: 'task2', isDone: true}, 
//         {id: 2, text: 'task3', isDone: false}
//       ]
//     }
// }
  




// создаем базовое состояниие(значение переменной):
export const store = configureStore({
    reducer: {                      // Здесь хранятся все состоняия
        todoList: todoReducer         // todoList это название редьюсера(такое имя сами задали) 
    }, 
    preloadedState: loadFromLocalStorage()
})


// подписываемся на все изменеия store:
store.subscribe(() => saveToLocalStorage(store.getState()));



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch