import { toDo } from "../../models/todo-item";
import classes from './ListItem.module.scss';




// при передачи аргументов, вместо props можно  его деструктуирировать, и тогда вместо props писать { todo }:
export const ListItem = (props: { todo : toDo }) => {

      return (
            <a href={`/list/${props.todo.id}`} className={ `${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}` }>  {props.todo.text}  </a>
      )
}