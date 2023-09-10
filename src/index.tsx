// точка входа:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';  // компоненты для маршрутизации
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { toDo } from './models/todo-item';        // импорт интрефейса
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';



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


// новый синтаксис роутинга:
const  router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [               // дочерние элементы будут рендериться на место  <Outlet />
      {
        path: '/',                  // при переходе на '/', отобразится компнент HomePage
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',              // при переходе на '/todo', отобразится компнент ToDoListPage
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',             
        element: <ItemDescription todos={todos} />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], 
//{ basename: '/app/' }     // /app/  это название поддомена(то есть /app//todo, /app/list/:id), нужен если выкладывать проект на GitHubPages
)  





const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
 root.render(   // в root добавляем всю верстку 
  <React.StrictMode>
    <RouterProvider router={router} />        {/* для  роутинга по новому синтаксису */}
    {/* роутинг(старый синтаксис): 
    {/* <BrowserRouter>
        <Header />                    {/* вызываем компонент(фукнцию) Header.tsx 
        <Routes>                      
            <Route path='/' element={ <HomePage  todos={todos} /> }></Route>            {/* перейдя на '/' страницу, вызовется клмплнент <HomePage /> , атрибут element обязталеьный.  Атрибут todos передаем в фукнцию HomePage() как props 
            <Route path='/list/:id' element={ <ItemDescription  todos={todos}  /> }></Route>
            <Route path='/todo' element={ <ToDoListPage /> }></Route>                   {/* перейдя на '/todo' страницу, вызовется клмплнент <ToDoListPage /> - компонент основной, вся весртка хранится здесь 
            <Route path='*' element={ <NotFound /> }></Route> 
        </Routes>
    </BrowserRouter> */}
        
  </React.StrictMode>
);

