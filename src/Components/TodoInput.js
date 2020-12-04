import React, { useState } from 'react';

function TodoInput(props) {
  const [input, setInput] = useState('');

  const { getInput } = props;

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    getInput(input);
    setInput('');
  }

  return (
    <div>
      <div className="mt-3">
        <input onChange={handleChange} value={input} className="form-control " type="text" placeholder="Add task"/>  
      </div>

      <button onClick={handleClick} type="submit" className="btn btn-primary w-100 mt-1">
        Add task
      </button>
    </div>
  )
}

export default TodoInput
