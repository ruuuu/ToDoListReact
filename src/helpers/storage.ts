import { RootState } from "../store";

// state сохраняем в localStorage при его изменении:
export const saveToLocalStorage = (state: RootState) => {   // state типа RootState.   
  
    try{
        const appState = JSON.stringify(state);  // превращаем в строку.  В localStorage хранятся строки. { todoList: {todos: [ {id: 0, text: "задача1", isDone: false},  {id: 1, text: "задача2", isDone: false} ]} }
        localStorage.setItem('appState', appState);       // запиcываем state(объект) в localStorage
    }
    catch(err){
        console.warn(err);
    } 
}
  
  

export const loadFromLocalStorage = () => {  // провереят наличие item в appState внутри localStorage
      
    try{
        const appState = localStorage.getItem('appState');
        if(!appState || appState === null){
            return undefined;       // выход из метода
        }
  
        return JSON.parse(appState); // из храниища достаем данные, сперва  превратив из строки в  объект
    }
    catch(err){
        console.warn(err);
        return undefined;
    }
}
  
  
  