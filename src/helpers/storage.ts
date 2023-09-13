import { RootState } from "../store";

// сохраняем стор при его изменении:
export const saveToLocalStorage = (state: RootState) => {   // state типа RootState.   
  
      try{
          const appState = JSON.stringify(state);
          localStorage.setItem('appState', appState);       // запиcываем state(объект) в localStorage
      }
      catch(err){
          console.warn(err);
      } 
}
  
  

export const loadFromLocalStorage = () => {  // провереят наличие item в appStae внутри localStorage
      
      try{
          const appState = localStorage.getItem('appState');
          if(!appState || appState === null){
              return undefined;
          }
  
          return JSON.parse(appState); // их храниища достаем данные, сперва  превратив из строки в  объект
      }
      catch(err){
          console.warn(err);
          return undefined;
      }
}
  
  
  