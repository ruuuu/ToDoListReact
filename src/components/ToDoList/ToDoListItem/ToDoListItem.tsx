import './ToDoListItem.scss';
import { toDo } from '../../../models/todo-item';                 // импорт интерфейса


// ПАHАМЕТРЫ В КОМПОНЕТ(фукния возвращающая верстку) ПЕРЕДАЕМ ЧЕРЕЗ props:                             
export const ToDoListItem = (props: { toDoItem: toDo,  updateToDo: Function,  deleteToDo: Function }) => {            // передаем 3 props-а(атрибуты тега) типа toDo

      //console.log('props ', props)
      return (
            <li className="todo-list-item__wrapper">
                  <span> {props.toDoItem.text} </span>
                  <div className="todo-list-item__buttons">
                        <button className="btn-trash"   onClick={() => props.deleteToDo(props.toDoItem)}></button>              {/*  на кнопку повесили обработчик onClick, по нажатию на нопку Корзина, вызвется deleteToDo() */}
                        <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}   onClick={() => props.updateToDo(props.toDoItem)}></button>
                  </div>
            </li>
      )


}