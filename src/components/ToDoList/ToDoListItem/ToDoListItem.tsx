// компонент
// import './ToDoListItem.scss';
import { toDo } from '../../../models/todo-item';                 // импорт интерфейса
import { TodoItem, TodoItemButtons, TodoItemButton, ToDiListItemText } from './ToDoListItem.styled';
import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';



// ПАРАМЕТРЫ В КОМПОНЕНТ ПЕРЕДАЕМ ЧЕРЕЗ props:                             
export const ToDoListItem = (props: { toDoItem: toDo,  updateToDo: Function,  deleteToDo: Function }) => {            // передаем 3 props-а(атрибуты тега) 

      //console.log('props ', props)
      return (
            <TodoItem>
                  <ToDiListItemText> {props.toDoItem.text} </ToDiListItemText>
                  <TodoItemButtons>
                        {/*  на кнопку повесили обработчик onClick, по нажатию на кнопку Корзина, вызвется deleteToDo() */}
                        <TodoItemButton   icon={trashIcon}  onClick={() => props.deleteToDo(props.toDoItem)}> </TodoItemButton>  
                        {/* className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'} */}
                        <TodoItemButton  icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}  onClick={() => props.updateToDo(props.toDoItem)}> </TodoItemButton>
                  </TodoItemButtons>
            </TodoItem>
      )


}