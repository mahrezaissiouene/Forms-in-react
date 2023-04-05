import {  useState , useRef} from "react";

const SimpleInput = (props) => {

  const entrednameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid , setnameIsValid ] = useState(true)
  const [inputIsTouched , setinputNameIstouched] = useState(false) ;

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setinputNameIstouched(true);

    if (name.trim() === "") {
      
      setnameIsValid(false)
      return ;
    }

    setnameIsValid(true)
  
    console.log("using state "+name);

    const entredname = entrednameRef.current.value ; 
    console.log('using ref ' + entredname )

  };
  const  entredinputIsNotValid = !nameIsValid && inputIsTouched ;
  const formclasses = entredinputIsNotValid ? 'form-control invalid' : 'form-control '
  return (
    <form onSubmit={submitHandler}>
      <div className={formclasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={entrednameRef} type="text" id="name" onChange={changeHandler} />
     { entredinputIsNotValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
