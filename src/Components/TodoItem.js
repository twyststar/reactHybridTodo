import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {

  deleteTodo(id) {
    this.props.onDelete(id)
  }
  render() {
    return <li className="todoItem">
      <strong>{this.props.todo.title}</strong> - Completed: {this.props.todo.completed.toString()}
      <button className="deleteBtn" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>
        X
        </button>
    </li>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
};

export default TodoItem;