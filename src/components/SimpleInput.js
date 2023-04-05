import {  useState , useRef} from "react";

const SimpleInput = (props) => {

  const entrednameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid , setnameIsValid ] = useState(true)

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      
      setnameIsValid(false)
      return ;
    }

    setnameIsValid(true)
  
    console.log("using state "+name);

    const entredname = entrednameRef.current.value ; 
    console.log('using ref ' + entredname )
  };

  const formclasses = nameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={submitHandler}>
      <div className={formclasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={entrednameRef} type="text" id="name" onChange={changeHandler} />
     { !nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
