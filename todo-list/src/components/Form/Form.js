import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onKeyPress, addItem, onEdit }) => {
  return (
    <div className="form">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div
        className="edit"
        onClick={ (e) => {
          e.stopPropagation();
          onEdit()}
        }
      >
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
      <div 
        className="add-btn"
        onClick={addItem}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Form;