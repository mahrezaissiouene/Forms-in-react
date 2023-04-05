import {  useState , useRef} from "react";

const SimpleInput = (props) => {

  const entrednameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid , setnameIsValid ] = useState(false)

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {

    if (name.trim() === "") {
      setnameIsValid(false)
      return ;
    }

    setnameIsValid(true)
    event.preventDefault();
    console.log("using state "+name);

    const entredname = entrednameRef.current.value ; 
    console.log('using ref ' + entredname )
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
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
