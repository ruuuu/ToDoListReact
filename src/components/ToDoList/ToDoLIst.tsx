import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss';
import { toDo } from "../../models/todo-item";  // импорт интрфейса toDo



export const ToDoList = (props: { todos: toDo[],  updateToDo: Function,  deleteToDo: Function }) => {      // здесь props  это массив todos(у  котрого элементы имеют тип  toDo) и две фукнции 

        
      // вернет компоненты <ToDoListItem /> массив, у котрых todoItem.isDone: false:
      const checkedList = () => {
            return  props.todos.filter((todoItem) => todoItem.isDone === false).map((todoItem, index) => {
                  return  (               /* <li></li> */
                        <ToDoListItem  toDoItem={todoItem}  updateToDo={props.updateToDo}  deleteToDo={props.deleteToDo}  key={index} />            // итерируемуму элементу надо добавлять key
                  )
            })
      }


      // вернет компоненты <ToDoListItem /> массив, у котрых todoItem.isDone: true:
      const uncheckedList = () => {
            return  props.todos.filter((todoItem) => todoItem.isDone === true).map((todoItem, index) => {
                  return  (               /* <li></li> */
                        <ToDoListItem  toDoItem={todoItem}  updateToDo={props.updateToDo}  deleteToDo={props.deleteToDo}  key={index} />            // Вызывается фукния ToDoListItem() и в нее пеераде  итерируемуму элементу надо добавлять key
                  )
            })
      }



      return (
            <div className="todo-container">
                  <ul className="todo-list failed"> { checkedList() } </ul>               {/* вызов фукнции */}
                  <ul className="todo-list completed"> { uncheckedList() } </ul>
            </div>
      )
}