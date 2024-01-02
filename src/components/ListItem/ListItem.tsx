import { Link } from "react-router-dom";
import { toDo } from "../../models/todo-item";
import classes from './ListItem.module.scss';




// при передачи аргументов, вместо props можно  его деструктуирировать, и тогда вместо props писать { todo }: { todo: ToDo }
export const ListItem = (props: { todo : toDo }) => {

      return (      // /app/
            <Link  to={`/list/${props.todo.id}`}  className={ `${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}` }>  {props.todo.text}  </Link>
            // либо так:
            // <Link  href={`/list/${props.todo.id}`} target="_blank" rel="noreferrer" className={ `${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}` }>  {props.todo.text}  </Link>
            )
}