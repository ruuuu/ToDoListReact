// компонент Header:
import { NavLink } from 'react-router-dom'; // этот компонет так же как и  <Link>, но еще он  отслушивате активную ссылку
import classes from './Header.module.scss';  // classes это объект, внутри которого будут объекты классов. 


export const Header = () => {

      // {/* из объекта достали isActive  это дестуртуризация: */}                     фукнция возрвщает реультат типа string
      const getActiveClass = ({ isActive }: {isActive: boolean }): string => {
           return  isActive  ?  `${classes.active} ${classes.link}`  :  classes.link;
      }


      return (
            <header className={classes.header}>  {/* класс .Header_header__OKWO7, префикс(OKWO7) гарантируют инкапсуляцию стилей. То есть стили для одного компанонента не применятся к другому */}
                  <div className={classes.container}>
                        <NavLink  to="/"   className={getActiveClass}> ToDo </NavLink>                 {/* компонент Link(как и NavLink) позволяет при смене контента, перезагрузки не будет */}
                        <NavLink  to="/list"  className={getActiveClass}> List </NavLink>
                        
                        
                        {/* <a href="/" className={`${classes.link} ${classes.active}`}> HomePage </a>    //.active и .link  наши классы
                        <a href="/todo" className={`${classes.link} ${classes.active}`}> ToDo </a>   два класса добвиили */}                 
                  </div> 
            </header> 
      )
}