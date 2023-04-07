
import { useState } from 'react';

const useInput = (ValidateInput) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [IsTouched, setIsTouched] = useState(false);

    
  const enteredValueIsValid = ValidateInput(enteredValue) ;
  const haserror = IsTouched && !enteredValueIsValid;

  const ValueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };
  const ValueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {

    setEnteredValue('');
    setIsTouched(false);

  }



  return {
    enteredValue ,
    enteredValueIsValid ,
    haserror , 
    ValueInputChangeHandler ,
    ValueInputBlurHandler ,
    reset 
      }


}

export default useInput;