import { useEffect, useState } from "react"
import { toDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom";



interface ComponentProps {

      todos: toDo[]
}



// вместо того чтобы передавать props: props: { todos: toDo[] }, он дял каждого кмпонента может быть большиим, можно передать ComponentPages и вместо слова props  дестуртукрируем его:
export const ViewListItem = ({ todos }:  ComponentProps) => {

      const { id } = useParams();                                // хук, извлекает динамические  параметы которые есть в урле(/list/:id). id потому что в пути path='/list/:id' задали сами парматер id 
      const navigate = useNavigate();                             // хук, переводит страницу на указанный урл
      const [todo, setTodo] = useState<toDo>();                     // хук, инициализиуерт перменную todo(нач значение будет undefined) , setTodo() меняет ее

      
      useEffect(() => {                                            // хук, принимает  коллбэк, коллбэк будет запущен вовремя загрузки компонента. Нужен для инициализации(отбработает при инициализации  компонента и монтирования), ренддера. Отрабоатет минимум 1 раз
            // при каждой смене id  в урле,  будет отрабатывать этот хук: 
            const searchTodo = todos.find((todoItem) => String(todoItem.id) === id);
           
            if(searchTodo){
                  setTodo(searchTodo);                // меняет значение переменной todo = searchTodo
            }
            else{
                  navigate('/404');
            }
      }, [todos, id, navigate]);  // как только изменится одна из переменных todos, id, navigate, то отработает useEffect() и перерерисует компонент(верстку)


      return (
            <div className="container">
                  <h1> {todo?.text} </h1>   {/* если  у todo свойство text есть, то вывдеет его */}
            </div> 
      )
}