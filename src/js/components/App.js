var React = require('react');
var TodoActions = require('../actions/todo_actions');
var TodoStore = require('../stores/todo_store');

function getTodoItem(todo) {
  return <li>{todo.description}</li>;
}

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

  onAddButtonClicked: function() {
    TodoActions.createTodo({description: 'test todo'});
  },

  render: function() {
    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.onAddButtonClicked}>Add Todo</button>
        <ul>
          {this.state.todos.map(getTodoItem)}
        </ul>
      </div>
    );
  }
});

module.exports = App;
