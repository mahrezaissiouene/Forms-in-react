import { useState  } from "react";
import  useInput from "./hooks/use-input";

const SimpleInput = (props) => {

  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    haserror: entrednamehaserror,
    ValueInputChangeHandler: nameInputChangeHandler,
    ValueInputBlurHandler: nameInputBlurHandler,
    reset: namereset,

  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    haserror: enteredEmailIsInvalid,
    ValueInputChangeHandler: emailInputChangeHandler,
    ValueInputBlurHandler: emailInputBlurHandler,
    reset: emailreset,

  } = useInput((value) => value.includes("@"));



  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }



  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    namereset();
    emailreset();
  };

  const nameEmailClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

    const nameInputClasses = entrednamehaserror
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {entrednamehaserror && <p>Name should not be empty</p>}
      </div>
      <div className={nameEmailClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p>Email should not be empty and must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
