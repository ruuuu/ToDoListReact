// точка входа:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // компоненты для маршрутизации
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { toDo } from './models/todo-item';        // импорт интрефейса
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';



const todos: toDo[] = [     // для теста  
  {
        id: 0,
        text: 'Первое действие',
        isDone: false
  },
  {
        id: 1,
        text: 'Второе действие',
        isDone: true
  },
  {
        id: 2,
        text: 'Третье действие',
        isDone: false
  },
  {
    id: 3,
    text: 'Четвертое действие',
    isDone: true
  }
];  



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
 root.render(   // в root добавляем всю верстку 
  <React.StrictMode>
    <BrowserRouter>
        <Header />                    {/* вызываем компонент(фукнцию) Header.tsx */}
        <Routes>                      {/* роутинг: */}
            <Route path='/' element={ <HomePage  todos={todos} /> }></Route>   {/* перейдя на '/' страницу, вызовется клмплнент <HomePage /> , атрибут element обязталеьный.  Атрибут todos передаем в фукнцию HomePage() как props */}
            <Route path='/list/:id' element={ <ItemDescription  todos={todos}  /> }></Route>
            <Route path='/todo' element={ <ToDoListPage /> }></Route>   {/* перейдя на '/todo' страницу, вызовется клмплнент <ToDoListPage /> - компонент основной, вся весртка хранится здесь */}
            <Route path='*' element={ <NotFound /> }></Route> 
        </Routes>
    </BrowserRouter>
        
  </React.StrictMode>
);

