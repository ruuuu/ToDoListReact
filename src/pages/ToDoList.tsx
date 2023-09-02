// компонент- функция, которая возвращает верстку ОДНОГО блока

import { Header } from "../components/Header/Header";



export const ToDoList = () => {
      // в круглых скобках  () пишется верстка
      return (
            <>                                  {/* если надо указать нескоько тегов, то вместо div ставим <> ( React Fragment) */}
                  {/* <header className="header">
                        <div className="header-container">
                              <a href="/">ToDo</a>
                        </div>
                  </header> */}

                  <Header />   {/* вызываем компонент Header.tsx */}

                  <div className="form-wrapper">
                        <form action="#">
                              <label>
                                    <input type="text" />
                                    <button></button>
                              </label>
                        </form>
                  </div>
                  <div className="todo-container">
                        <ul className="todo-list failed">
                              <li className="todo-list-item__wrapper">
                                    <span>Первая задача</span>
                                    <div className="todo-list-item__buttons">
                                          <button className="btn-trash"></button>
                                          <button className="btn-check"></button>
                                    </div>
                              </li>
                        </ul>
                        <ul className="todo-list completed">
                              <li className="todo-list-item__wrapper">
                                    <span>Вторая задача</span>
                                    <div className="todo-list-item__buttons">
                                          <button className="btn-trash"></button>
                                          <button className="btn-uncheck"></button>
                                    </div>
                              </li>
                        </ul>
                  </div>
            </>  
           
      )
}