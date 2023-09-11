import { toDo } from "../models/todo-item";
import { ListItem } from "../components/ListItem/ListItem";


interface ComponentProps {
      
      todos: toDo[]
}


//                       props: { todos: toDo[] }
export const ViewList = ({ todos }: ComponentProps) => {  // передаем массив, элементы котрого типа  toDo

      return (
            <div className="container">
                  { 
                        todos.map((todo: toDo) => {                            // переберет массив todos и вернет компонент ListItem для каждого элемента массива
                              return ( <ListItem  key={todo.id}  todo={todo} /> )                    // вернет компонент. Передаем todo как аргумент в фукнцию ListItem.  Указываем  key итерирумемому элементу, иначе ругаться будет
                        }) 
                  }
            </div>
      )

};