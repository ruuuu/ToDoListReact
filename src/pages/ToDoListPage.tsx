// компонент- функция, которая возвращает верстку ОДНОГО блока

import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoLIst";
import { toDo } from "../models/todo-item";           // импортруем интерфейс
import { useState } from 'react';




export const ToDoListPage = () => {

      const [todos, setTodos] = useState<toDo[]>([      // хук для изменения массива todos(у массива элементы типа toDo) методом setTodos(), нач значение todos это то, что передали в   useState()     
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
      ]);  
      
      
     // создание новой задачи:
      const createNewToDo = (text: string) => { 
            
            const newToDo: toDo = {                   // создаем элемент newToDo типа toDo
                  id: todos.length,
                  text: text,
                  isDone: false
            }

            setTodos([...todos, newToDo]);  // передали все эелменты массива todos и новый элемент newToDo
      }


      // обновление  задачи:
      const updateToDo = (toDoItem: toDo) => {                    // toDoItem типа toDo, элемент на галочку которого нажали
            console.log('update toDoItem', toDoItem)
            
            const newToDos = todos.map((item) => {                // map  вернет новый массив, элементами котрогот будут те, котрые подходят под услвие
                  if(item.id === toDoItem.id){
                        item.isDone = !item.isDone;
                  }
                  return item;
            });
                 
            
            console.log('toDoItem ', toDoItem)
            setTodos(newToDos);                                   // обновили массив todos    
      }



      // удаление  задачи:
      const deleteToDo = (toDoItem: toDo) => { 
            console.log('delete',  toDoItem)
            const newToDos = todos.filter((item) => item.id !== toDoItem.id);  // вернет массив, элементами котрого будут элементы подходящие под условеи
            setTodos(newToDos);  

      }




      // в круглых скобках  () пишется верстка:
      return (
                  <>                                  {/* если надо указать нескоько тегов, то вместо div ставим <> ( React Fragment) */}
                        <Form createNewToDo={createNewToDo} />                                              {/* вызывается функция createNewToDo(), где  createNewToDo(слева)  это аргумент функции Form */}
                        <ToDoList todos={todos}  updateToDo={updateToDo}  deleteToDo={deleteToDo}  />                       {/* вызывается функция ToDoList(компонент), туда передаются параметры: массив todos и функции updateToDo(), delteToDo */}
                  </>  
            
            )
}