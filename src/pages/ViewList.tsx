import { toDo } from "../models/todo-item";
import { ListItem } from "../components/ListItem/ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";


// interface ComponentProps {
      
//       todos: toDo[]
// }


//                       props: { todos: toDo[] }
// тк  у нас теперь есть хранлиище состояний(Redux), то передавать { todos }: ComponentProps не надо. Массив todos берем из состояния
export const ViewList = () => {  // передаем массив, элементы котрого типа  toDo

      const todoList = useSelector((state: RootState) => state.todoList.todos);             // при помощи хука, получили массив todos из redux      


      return (
            <div className="container">
                  { 
                        todoList.map((todo: toDo) => {                            // переберет массив todoList(todos) и вернет компонент ListItem для каждого элемента массива
                              return ( <ListItem  key={todo.id}  todo={todo} /> )                    // вернет компонент. Передаем todo как аргумент в фукнцию ListItem.  Указываем  key итерирумемому элементу, иначе ругаться будет
                        }) 
                  }
            </div>
      )

};