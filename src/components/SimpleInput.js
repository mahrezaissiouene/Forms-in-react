const SimpleInput = (props) => {
  return (
    <form className="mahrez" >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );  
};

export default SimpleInput;
