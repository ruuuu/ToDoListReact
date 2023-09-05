import './ToDoListItem.scss';
import { toDo } from '../../../models/todo-item';                 // импорт интерфейса


                             
export const ToDoListItem = (props: { toDoItem: toDo,  updateToDo: Function,  deleteToDo: Function}) => {            // передаем 3 props-а(атрибуты тега) типа toDo

      //console.log('props ', props)
      return (
            <li className="todo-list-item__wrapper">
                  <span> {props.toDoItem.text} </span>
                  <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}></button>
                  </div>
            </li>
      )


}