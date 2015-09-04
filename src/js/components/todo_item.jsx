var _ = require('lodash');
var React = require('react');
var PropTypes = React.PropTypes;
var TodoActions = require('../actions/todo_actions');

var TodoItem = React.createClass({
  propTypes: {
    todo: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      done: PropTypes.bool
    }).isRequired
  },

  removeTodo: function() {
    TodoActions.removeTodo(this.props.todo);
  },

  markTodoDone: function() {
    var newTodo = _.cloneDeep(this.props.todo);
    newTodo.done = true;
    TodoActions.updateTodo(newTodo);
  },

  render: function() {
    return this.props.todo.done ? (
      <li>
        <span className='todo-item--done'>{this.props.todo.description}</span>
      </li>
    ) : (
      <li>
        <span>{this.props.todo.description}</span>
        <button onClick={this.markTodoDone}>&#x2713;</button>
        <button onClick={this.removeTodo}>&#x2717;</button>
      </li>
    );
  }
});

module.exports = TodoItem;
