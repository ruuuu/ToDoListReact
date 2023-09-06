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




const todos: toDo[] = [      
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
            <Route path='/' element={ <HomePage /> }></Route>   {/* перейдя на '/' страницу, будет отображаен <HomePage />  */}
            <Route path='/todo' element={ <ToDoListPage /> }></Route>   {/* перейдя на '/todo' страницу, будет отображаен <ToDoListPage /> - компонент основной, вся весртка хранится здесь */}
        </Routes>
    </BrowserRouter>
        
  </React.StrictMode>
);

