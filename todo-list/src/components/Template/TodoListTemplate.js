import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <div className="container">
      <main className="todoList-container">
        <section className="title-wrapper">
          To Do List
        </section>
        {/* <section className="pallete-wrapper">
          팔레트 부분
        </section> */}
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          {children}
        </section>
      </main>
    </div>
  )
}

export default TodoListTemplate;