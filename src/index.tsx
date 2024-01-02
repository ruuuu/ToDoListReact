// точка входа:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';  // компоненты для маршрутизации
import { router } from './router';
import { store } from './store'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
 root.render(   // в root добавляем всю верстку 
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />           {/* для  роутинга по новому синтаксису */}
     </Provider>
   
    {/* роутинг(старый синтаксис): 
    {/* <BrowserRouter>
        <Header />                    {/* вызываем компонент(фукнцию) Header.tsx 
        <Routes>                      
            <Route path='/' element={ <HomePage  todos={todos} /> }></Route>            {/* перейдя на '/' страницу, вызовется компонент <HomePage /> , атрибут element обязталеьный.  Атрибут todos передаем в фукнцию HomePage() как props 
            <Route path='/list/:id' element={ <ItemDescription  todos={todos} /> }></Route>
            <Route path='/todo' element={ <ToDoListPage /> }></Route>                   {/* перейдя на '/todo' страницу, вызовется компонент <ToDoListPage /> - компонент основной, вся весртка хранится здесь 
            <Route path='*' element={ <NotFound /> }></Route> 
        </Routes>
    </BrowserRouter> */}
        
  </React.StrictMode>
);

