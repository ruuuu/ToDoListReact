// компонент Form
import './Form.scss';
import { ChangeEvent } from 'react';




export const Form = () => {

      let createText = '';          // здесь будеи хранить введнный  вполе текст задачи

      const formSubmit = () => {            // по нажатию на кнопку плюса, вызовется эта фукнция

      }

      const changeText = (event: ChangeEvent<HTMLInputElement>) => {          // ChangeEvent<HTMLInputElement> - тип евента
            //console.log(event.target.value)
            createText = event.target.value;

      }



      return (
            <div className="form-wrapper">
                        <form action="#" onSubmit={formSubmit}>         {/*  события начинаются на on. По нажатию на кнопку плюса, выовется formSubmit() */}
                              <label>
                                    <input type="text" onInput={changeText}/>     {/* событие onInput повесили на поле. При вводе символа в поле, вызовется changeText() */}
                                    <button></button>
                              </label>
                        </form>
            </div>
      )
}