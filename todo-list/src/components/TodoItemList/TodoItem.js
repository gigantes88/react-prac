import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { id, text, onToggle, onRemove, checked } = this.props;
    return (
      <div 
        className="todos"
        onClick={() => onToggle(id)}
      >
        <div
          className={`${checked && 'checked'}`}
        >{text}
          <div 
            className="remove"
            onClick={ (e) => {
              e.stopPropagation();
              onRemove(id)}
            }
          >
            &times;
          </div>
        </div>
      </div>
    )
  }
}

export default TodoItem;