import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove, isEditable, onChange } = this.props;
    const todoList = todos.map(
      ({ id, text, checked, }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          onToggle={onToggle}
          onChange={onChange}
          onRemove={onRemove}
          checked={checked}
          isEditable={isEditable}
        />
      )
    );
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoItemList;