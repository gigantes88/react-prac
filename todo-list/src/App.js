import React, { Component } from 'react';
import TodoListTemplate from './components/Template/TodoListTemplate';
import Form from './components/Form/Form';
import TodoItemList from './components/TodoItemList/TodoItemList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      input: '',
      todos: [],
      editText: '',
      isEditable: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }
  
  handleChange2 = (e) => {
    this.setState({
      editText: e.target.value,
    })
  }

  handleAddItem = () => {
    const { input, todos, } = this.state;

    if (input === '') {
      return
    } else {
      this.setState({
        input: '',
        todos: todos.concat({
          id: this.state.id++,
          text: input,
          checked: false,
        })
      });
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleAddItem();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const selectedIndex = todos.findIndex(item => item.id === id)
    const selectedTodo = todos[selectedIndex];
    const nextTodos = [...todos];

    nextTodos[selectedIndex] = {
      ...selectedTodo,
      checked: !selectedTodo.checked,
    }

    this.setState({
      todos: nextTodos, // checked 값이 바뀌고 난 후의 전체 todos의 state 값을 넣는다.
    });
  }

  handleEdit = (id) => {
    const {isEditable} = this.state;
    this.setState({ isEditable: !isEditable })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    const todoList = todos.filter(item => item.id !== id)
    this.setState({
      todos: todoList,
    })
  }
  
  render() {
    const { input, todos, isEditable } = this.state;
    const { 
      handleChange,
      handleAddItem,
      handleKeyPress,
      handleToggle,
      handleEdit,
      handleRemove,
      handleChange2
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onChange={handleChange}
            addItem={handleAddItem}
            onKeyPress={handleKeyPress}
            onEdit={handleEdit}
          />
        }
      >
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          isEditable={isEditable}
          onChange={handleChange2}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
