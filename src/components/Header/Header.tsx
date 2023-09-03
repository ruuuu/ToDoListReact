// компонент Header:

import classes from './Header.module.scss';  // classes это объект, внутри которого будут объекты классов. 


export const Header = () => {

      return (
            <header className={classes.header}>  {/* класс .Header_header__OKWO7, префикс(OKWO7) гарантируют инкапсуляцию стилей. То есть стили для одного компанонента не применятся к другому */}
                  <div className={classes.container}>
                        <a href="/" className={`${classes.link} ${classes.active}`}> ToDo </a>                    {/* два класса добвиили */}
                  </div>
            </header> 
      )
}