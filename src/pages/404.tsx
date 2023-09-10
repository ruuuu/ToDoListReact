import { Link } from "react-router-dom"




export const NotFound = ()=>{

      return (
            <div className="container">
                  <h1> Страница не найдена </h1>
                  <Link to="/"> Главная страница </Link>
            </div>
           
      )
}