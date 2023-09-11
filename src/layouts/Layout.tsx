import { Outlet } from "react-router-dom"
import  { Header } from "../components/Header/Header";




export const Layout = () => {

      return (
            <>
                  <Header />
                  <Outlet />       {/*контенйер дял дочерних роутингов.  Если path: '/', то сюда отобразится <ToDoListPage>. Если path: '/list', то сюда отобразится  <ViewList />.   Если path: '/list/:id', то сюда отобразится  <ViewListItem />  */}
            </>
      )
}