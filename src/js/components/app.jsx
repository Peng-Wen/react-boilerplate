var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoInput = require('./todo_input.jsx');
var TodoList = require('./todo_list.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {todos: []};
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this.todoStoreChangeListener);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this.todoStoreChangeListener);
  },

  todoStoreChangeListener: function() {
    this.setState({todos: TodoStore.getAllTodos()});
  },

  render: function() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoInput />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
});

module.exports = App;
