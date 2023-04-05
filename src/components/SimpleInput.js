import {  useState , useRef} from "react";

const SimpleInput = (props) => {

  const entrednameRef = useRef();
  const [name, setName] = useState("");

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
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
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
