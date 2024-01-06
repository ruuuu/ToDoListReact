import { useEffect, useState } from "react"
import { toDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";



// interface ComponentProps { // этот inteface задаем , если props {} очень большой

//       todos: toDo[]
// }



// вместо того чтобы передавать props: props: { todos: toDo[] }, он дял каждого кмпонента может быть большиим, можно передать ComponentPages и вместо слова props  дестуртукрируем его:
//          передавать пропс { todos }: ComponentProps уже не надо, тк массив todos хранится в хранлище состяний(Redux)
export const ViewListItem = () => {

      const { id } = useParams();                                // хук, извлекает динамические параметры в урле,  которые есть в урле(/list/:id). 
      const navigate = useNavigate();                             // хук, переводит страницу на указанный урл
      console.log('navigate in ViewLitItem: ', navigate )
      
      const [todo, setTodo] = useState<toDo>();                     // хук, инициализиуерт перменную todo(нач значение будет undefined) , setTodo() меняет массив todo

      const todoList = useSelector((state: RootState) => state.todoList.todos);             // с помоью хука, получили массив todos из redux(хранилище соатояний)      

      
      useEffect(() => {                                            // хук, принимает  коллбэк, коллбэк будет запущен вовремя загрузки компонента. 
            //Нужен для инициализации(отбработает при инициализации  компонента и монтирования(добавления)), ренддера, дестроя(удаление) компонента. Отрабоатет минимум 1 раз
            
            // при каждой смене :id  в урле,  будет отрабатывать этот хук: 
            const searchTodo = todoList.find((todoItem) => String(todoItem.id) === id);         // {id, text, isDone}
           
            if(searchTodo){
                  setTodo(searchTodo);                // меняет значение переменной todo = searchTodo  это {id, text, isDone}
            }
            else{ 
                  navigate('/404');
            }
      }, [todoList, id, navigate]);                   // как только изменится одна из переменных: todoList(массив todos), id, navigate(урл), то отработает коллбэк из useEffect() и перерисует компонент(верстку)


      return (
            <div className="container">
                  <h1> {todo?.text} </h1>                   {/* если  у todo свойство text есть, то выведет его */}
            </div> 
      )
}