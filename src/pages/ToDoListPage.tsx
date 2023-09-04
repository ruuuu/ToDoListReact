// компонент- функция, которая возвращает верстку ОДНОГО блока

import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoLIst";
import { toDo } from "../models/todo-item";           // импортруем интерейс


export const ToDoListPage = () => {
      
      const todos: toDo[] = [             // массив элементов типа ToDo
            {
                  id: 0,
                  text: 'Перая задача',
                  isDone: false
            },
            {
                  id: 1,
                  text: 'Вторая задача',
                  isDone: true
            },
            {
                  id: 2,
                  text: 'Третья задача',
                  isDone: true
            }
      ];  


      // в круглых скобках  () пишется верстка:
      return (
                  <>                                  {/* если надо указать нескоько тегов, то вместо div ставим <> ( React Fragment) */}
                        <Header />   {/* вызываем компонент Header.tsx */}
                        <Form />
                        <ToDoList todos={todos}/>
                  </>  
            
            )
}