// компонент Header:

import { NavLink } from 'react-router-dom'; // этот компонет так же как и  <Link>, но еще он  отслушивате активную ссылку
import classes from './Header.module.scss';  // classes это объект, внутри которого будут объекты классов. 


export const Header = () => {
      //                                                   фукнция возрвщает реультат типа string
      const getActiveClass = ({ isActive }: {isActive: boolean }): string => {
           return  isActive  ?  `${classes.active} ${classes.link}`  :  classes.link;
      }

      return (
            <header className={classes.header}>  {/* класс .Header_header__OKWO7, префикс(OKWO7) гарантируют инкапсуляцию стилей. То есть стили для одного компанонента не применятся к другому */}
                  <div className={classes.container}>
                        {/* из объекта достали isActive: */}
                        <NavLink  to="/"   className={getActiveClass}> ToDo </NavLink>                 {/* компонент LInk позволяет при смене страниц, перезагрузки не будет */}
                        <NavLink  to="/list"  className={getActiveClass}> List </NavLink>
                        
                        
                        {/* <a href="/" className={`${classes.link} ${classes.active}`}> HomePage </a>     
                        <a href="/todo" className={`${classes.link} ${classes.active}`}> ToDo </a>   два класса добвиили */}                 
                  </div> 
            </header> 
      )
}