import './ToDoListItem.scss';
import { toDo } from '../../../models/todo-item';                 // импорт интерфейса


                              // {id: number, text: string, isDone: boolean}
export const ToDoListItem = (props: { toDoItem:  toDo}) => {            // props(атрибут тега) типа toDo

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