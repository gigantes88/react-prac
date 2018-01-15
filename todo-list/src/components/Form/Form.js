import React from 'react';
import './Form.css';

const Form = ({value, onChange, onKeyPress, addItem}) => {
  return (
    <div className="form">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div 
        className="add-btn clr-fix"
        onClick={addItem}
      >
        +
      </div>
    </div>
  )
}

export default Form;