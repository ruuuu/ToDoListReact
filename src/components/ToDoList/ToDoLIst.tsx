import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss';
import { toDo } from "../../models/todo-item";  // импорт интрфейса toDo



export const ToDoList = (props: { todos: toDo[] }) => {      // здесь props  это массив todos, у  котрого элементы имеют тип  toDo

        
      
      
      // вернет компоненты <ToDoListItem /> массив, с todoItem.isDone: false:
      const checkedList = () => {
            return  props.todos.filter((todoItem) => todoItem.isDone === false).map((todoItem, index) => {
                  return  (
                        <ToDoListItem toDoItem={todoItem} key={index} />            // итерируемуму элементу надо добавлять key
                  )
            }) 
      }


      // вернет компоненты <ToDoListItem /> массив, с todoItem.isDone: true:
      const uncheckedList = () => {
            return  props.todos.filter((todoItem) => todoItem.isDone === true).map((todoItem, index) => {
                  return  (
                        <ToDoListItem toDoItem={todoItem} key={index} />            // итерируемуму элементу надо добавлять key
                  )
            })
      }



      return (
            <div className="todo-container">
                  <ul className="todo-list failed">
                        { checkedList() }
                  </ul>
                  <ul className="todo-list completed">
                        { uncheckedList() }
                  </ul>
        </div>
      )
}