import { Outlet } from "react-router-dom"
import  { Header } from "../components/Header/Header";




export const Layout = () => {

      return (
            <>
                  <Header />
                  <Outlet />       {/* место куда будут рендериться компоненеты страниц */}
            </>
      )
}