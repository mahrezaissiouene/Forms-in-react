import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [inputIsTouched, setinputNameIstouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const entredinputIsNotValid = !nameIsValid && inputIsTouched;

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const onblurHandler = () => {
    setinputNameIstouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setinputNameIstouched(true);

    if (name.trim() === "") {
      return;
    }

    console.log("using state " + name);
    setName('')
    setinputNameIstouched(false)
    
  };
  const formclasses = entredinputIsNotValid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
