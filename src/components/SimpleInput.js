import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [emailisValid, setemailIsValid] = useState(true);

  const [inputIsTouched, setinputNameIstouched] = useState(false);

  const nameIsValid = name.trim() !== "";

  const entredinputIsNotValid = !nameIsValid && inputIsTouched;
  const emailisnotvalid = !emailisValid && inputIsTouched;

  let formIsValid = false;

  if (nameIsValid && emailisValid) {
    formIsValid = true;
  }

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const changeemailHandler = (event) => {
    setemail(event.target.value);
    setemailIsValid(validateEmail(event.target.value));
  };

  const onblurHandler = () => {
    setinputNameIstouched(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setinputNameIstouched(true);

    if (name.trim() === "") {
      return;
    }

    console.log("using state " + name);
    setName("");
    setinputNameIstouched(false);
  };
  const formclasses = entredinputIsNotValid
    ? "form-control invalid"
    : "form-control ";


    const emformclasses = emailisnotvalid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={submitHandler}>
      <div className={formclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={onblurHandler}
          onChange={changeHandler}
          value={name}
        />
        {entredinputIsNotValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emformclasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={onblurHandler}
          onChange={changeemailHandler}
          value={email}
        />
        {emailisnotvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
