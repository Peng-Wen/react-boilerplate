var React = require('react');
var PropTypes = React.PropTypes;
var TodoItem = require('./todo_item.jsx');

function getTodoItem(todo) {
  return <TodoItem todo={todo} />;
}

var TodoList = React.createClass({
  propTypes: {
    todos: PropTypes.array.isRequired
  },

  render: function() {
    return (
      <ul className='todo-list'>
        {this.props.todos.map(getTodoItem)}
      </ul>
    );
  }
});

module.exports = TodoList;
