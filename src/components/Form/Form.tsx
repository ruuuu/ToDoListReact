// компонент Form
import { useState } from 'react';
import { FormBlock, FormWrapper, FormLabel, FormInput, FormButton } from './Form.style';
import plusIcon from '../../assets/images/plus.png';



export const Form = (props: { createNewToDo: Function }) => {  // передаем фуенцию
      // хук useState имеет переменую состояния(text), и метод изменения переменной(setText) состояния:
      const [text, setText] = useState<string>('');           // хук  useState - хранилище состояния (переменной text) и управления им. Передали пуcтую строку - нач значение переменной text; text - переменная хранящая значение, котрое передали в setText().   setText()- метод изменеия переменной text 


      const formSubmit = (event: React.SyntheticEvent) => {                      // по нажатию на кнопку Плюс, вызовется эта фукнция
            // console.log(evt.target.value)
            // console.log('createText ', createText);
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
            <FormWrapper>
                  <FormBlock action="#" onSubmit={formSubmit}>         {/*  события начинаются на on. По нажатию на кнопку плюса, вызовется formSubmit() */}
                        <FormLabel>
                              <FormInput type="text" onChange={(event) => setText(event.target.value)}  value={text} />     {/* событие onChange повесили на поле ввода. При вводе символа в поле, вызовется коллбэк */}
                              <FormButton icon={plusIcon} />
                        </FormLabel>
                  </FormBlock>
            </FormWrapper>
      )
}