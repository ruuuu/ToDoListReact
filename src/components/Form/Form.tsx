// компонент Form
import { useState } from 'react';
import './Form.scss';




export const Form = (props: { createNewToDo: Function }) => {  // передаем фуенцию
      // хук useState имеет text - переменная состояния, и setText - метод изменеия переменной состояния:
      const [text, setText] = useState<string>('');           // хук  useState - хранилище состояния (переменной text) и управления им. Передали пуcтую строку - нач значение переменной text; text - переменная хранящая значение, котрое передали в setText().   setText()- метод изменеия переменной text 


      const formSubmit = (event: React.SyntheticEvent) => {                      // по нажатию на кнопку Плюс, вызовется эта фукнция
            //console.log('createText ', createText);
            event.preventDefault();                               // чтобы полсе отправки формы страница не перезагружалась
            if(text){
                  props.createNewToDo(text);
                  setText('');                        // очищем значение переменной text
            }
           
      }


      // const changeText = (event: ChangeEvent<HTMLInputElement>) => {          // при вводе текста в поле, вызывается эта фукнция. ChangeEvent<HTMLInputElement> - тип евента
      //       //console.log(event.target.value)
      //       createText = event.target.value;
      // }



      return (
            <div className="form-wrapper">
                  <form action="#" onSubmit={formSubmit}>         {/*  события начинаются на on. По нажатию на кнопку плюса, вызовется formSubmit() */}
                        <label>
                              <input type="text" onChange={(event) => setText(event.target.value)}  value={text} />     {/* событие onChange повесили на поле ввода. При вводе символа в поле, вызовется коллбэк */}
                              <button></button>
                        </label>
                  </form>
            </div>
      )
}