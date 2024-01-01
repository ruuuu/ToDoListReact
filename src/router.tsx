import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { toDo } from "./models/todo-item";            // импорт интрефейса



// const todos: toDo[] = [     // для теста, массив, у котрого элемнты имеют тип toDo
//   {
//         id: 0,
//         text: 'Первое действие',
//         isDone: false
//   },
//   {
//         id: 1,
//         text: 'Второе действие',
//         isDone: true
//   },
//   {
//         id: 2,
//         text: 'Третье действие',
//         isDone: false
//   },
//   {
//     id: 3,
//     text: 'Четвертое действие',
//     isDone: true
//   }
// ];  





// новый синтаксис роутинга:
export const  router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,      // внутри  будут children:[], котрые прописаны ниже
        errorElement: <NotFound />,
        children: [               // дочерние элементы будут рендериться на место  <Outlet />
          {
            path: '/',                  // при переходе на '/', отобразится компнент ToDoListPage
            element: <ToDoListPage />
          },
          {
            path: '/list',              // при переходе на '/list', отобразится компнент ViewList
            element: <ViewList   />,    // убираем props  todos={todos} тк массив todos хранится в хранилище состояния, его будем брать оттуда
          }, 
          {
            path: '/list/:id',                // то есть path: /list/:id          
            element: <ViewListItem />         // убираем props todos={todos}, тк массив todos теперь хранится в хранилище сосотяния(redux), его будем брать оттуда
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ], 
    //{ basename: '/app/' }     // /app/  это название поддомена(то есть /app//todo, /app/list/:id), нужен если выкладывать проект на GitHubPages
    )  