// компонент- функция, которая возвращает верстку ОДНОГО блока
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoLIst";
import { toDo } from "../models/todo-item";           // импортруем интерфейс
import { useState } from 'react';
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";




export const ToDoListPage = () => {

     //это уже не надо, тк todos изменяется через useSelector:
     // const [todos, setTodos] = useState<toDo[]>([]);       // хук для изменения массива todos методом setTodos(), нач значение todos это то, что передали в useState()     
      const todoList = useSelector((state: RootState) => state.todoList.todos);             // при помощи хука, получили массив todos из redux(хранилище состояний)      
      const dispatch = useDispatch();                       // нужен чтобы вызвать редьюсеры          
      
      
     // создание новой задачи:
      const createNewToDo = (text: string) => { 
            dispatch(createAction(text));                   // вызов редьюсера  createAction(), text попдает в action.payload
      }


      // обновление  задачи:
      const updateToDo = (toDoItem: toDo) => {                    // toDoItem = {id, text, isDone} типа toDo, toDoItem попдает в action.payload
            dispatch(updateAction(toDoItem));                  // вызов редьюсера updateAction(), обновили массив todos    
      }



      // удаление  задачи:
      const deleteToDo = (toDoItem: toDo) => { 
            dispatch(deleteAction(toDoItem));                     // вызов редьюсера deleteAction()
      }




      // в круглых скобках () пишется верстка:
      return (
                  <>                                  {/* если надо указать нескоько тегов, то вместо div ставим <> ( React Fragment) */}
                     <Form createNewToDo={createNewToDo} />                                              {/* вызывается функция createNewToDo(), где  createNewToDo  это аргумент функции Form */}
                     <ToDoList todos={todoList}  updateToDo={updateToDo}  deleteToDo={deleteToDo}  />                       {/* вызывается функция ToDoList(компонент), туда передаются параметры-пропсы: массив todos и функции updateToDo(), delteToDo() */}
                  </>    
            )
}

