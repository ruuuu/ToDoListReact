// компонент- функция, которая возвращает верстку ОДНОГО блока

import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoLIst";



export const ToDoListPage = () => {
      // в круглых скобках  () пишется верстка
      return (
            <>                                  {/* если надо указать нескоько тегов, то вместо div ставим <> ( React Fragment) */}
                  <Header />   {/* вызываем компонент Header.tsx */}
                  <Form />
                  <ToDoList />
            </>  
           
      )
}