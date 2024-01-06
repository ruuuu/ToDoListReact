import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toDo } from '../models/todo-item';

// здесь хранилище состояний:


export interface TodoState {  // интерфейс хранилища
    todos: toDo[]             // массив типа  toDo = [{id, text, isDone}, {}]
}


const initialState: TodoState = {
    todos: [],   // нач значение
}
     




// создание редьюсера-мутатор состояния(они получают доступ к state и его меняют):
export const todoSlice = createSlice({  // slice- это объект, котрый отвечает за изменнение состяния
    name: 'todoList',                     // название редьюсера
    initialState,                         // нач сотсояние(массив todos пустой  в хранилище)
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {       // редьюсер. В action.payload попадают парметры, которые передаем при вызове редьюсера 
            
            const newToDo: toDo = {                         // создаем элемент newToDo типа toDo
                id: state.todos.length,
                text: action.payload,
                isDone: false                               // сделана задача или нет
            }

            state.todos = [...state.todos, newToDo];        // (обновляем наш массив todos), тое тсь  добавили в  массив новый элемент newToDo
        },


         
        updateAction: (state, action: PayloadAction<toDo>) => {         // редьюсер, action.payload = {id, text, isDone}
            
            const newToDos = state.todos.map((item) => {                // map  вернет новый массив, элементами котрогот будут те, котрые подходят под услвие
                if(item.id === action.payload.id){
                    item.isDone = !item.isDone;
                }
                return item;
            });
                 
            state.todos = newToDos; 
        },



        deleteAction: (state, action: PayloadAction<toDo>) => {          // редьюсер  PayloadAction дженерик- динам тип. action.payload = {id, text, isDone}
           
            const newToDos = state.todos.filter((item) => item.id !== action.payload.id);  // вернет массив, элементами котрого будут элементы подходящие под условеи
            state.todos = newToDos; 
        },
    },
})




export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer