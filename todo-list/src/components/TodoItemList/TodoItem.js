import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { id, text, onToggle, onRemove, checked, isEditable, onChange } = this.props;
    console.log(id)
    return (
      <div 
        className="todos"
        onClick={() => onToggle(id)}
        >
        <div
          id={`todo-${id}`}
          className={`${checked && 'checked'}`}
        >
          { isEditable ?
          <input 
            className="editable"
            type="text"
            value={text}
            onChange={onChange}
          /> :
          <span className="nonEditable">{text}</span>
          }
          <div 
            className="remove"
            onClick={ (e) => {
              e.stopPropagation();
              onRemove(id)}
            }
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoItem;