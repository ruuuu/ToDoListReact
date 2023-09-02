// точка входа:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoList } from './pages/ToDoList';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
 root.render(   // в root добавляем всю верстку 
  <React.StrictMode>
       <ToDoList />       {/* компонент */}
  </React.StrictMode>
);

