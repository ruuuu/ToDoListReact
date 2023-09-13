import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toDo } from '../models/todo-item';

// здесь хранилище состояния:


export interface TodoState {  // интерфейс хранилища
    todos: toDo[]             // массив типа  toDo
}


const initialState: TodoState = {
    todos: [],   // нач значение
}
     




// создание редьюсера-мутатор состояния(они получают доступ к state и его меняют):
export const todoSlice = createSlice({  // sice- это объект, котрый отвечает за изменнение состяния
    name: 'todoList',                     // название редьюсера
    initialState,                     // нач сотсояние
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {  
            
            const newToDo: toDo = {                         // создаем элемент newToDo типа toDo
                id: state.todos.length,
                text: action.payload,
                isDone: false
            }

            state.todos = [...state.todos, newToDo];        // (обновляем новый массив), тое тсь  добавили в  массив новый элемент newToDo
        },


        
        updateAction: (state, action: PayloadAction<toDo>) => {
            
            const newToDos = state.todos.map((item) => {                // map  вернет новый массив, элементами котрогот будут те, котрые подходят под услвие
                if(item.id === action.payload.id){
                    item.isDone = !item.isDone;
                }
                return item;
            });
                 
            state.todos = newToDos; 
        },



        deleteAction: (state, action: PayloadAction<toDo>) => { // PayloadAction дженерик-  динам тип
           
            const newToDos = state.todos.filter((item) => item.id !== action.payload.id);  // вернет массив, элементами котрого будут элементы подходящие под условеи
            state.todos = newToDos; 
        },
    },
})




export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer