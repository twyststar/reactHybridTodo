import React, { Component } from "react";
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

class Todos extends Component {
  deleteTodo(id) {
    this.props.onDelete(id);
  }

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.title} todo={todo} />
        )
      });
    }

    return (
      <div className="todos">
        <h3>Latest ToDos</h3>
        <br />
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func
}

export default Todos;