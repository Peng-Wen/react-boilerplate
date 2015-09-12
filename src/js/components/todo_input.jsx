var React = require('react');
var TodoActions = require('../actions/todo_actions');

var TodoInput = React.createClass({
  getInitialState: function() {
    return {description: ''};
  },

  addTodo: function(event) {
    if (event.keyCode === 13) {
      TodoActions.createTodo({
        description: event.target.value,
        done: false
      });

      this.setState({description: ''}, function() {
        React.findDOMNode(this.refs.userInput).focus();
      });
    }
  },

  handleInputChange: function(event) {
    this.setState({description: event.target.value});
  },

  render: function() {
    return (
      <div className="todo-input">
        <input
        ref="userInput"
        type="text"
        placeholder="What do you want to do?"
        value={this.state.description}
        onChange={this.handleInputChange}
        onKeyUp={this.addTodo} />
      </div>
    );
  }
});

module.exports = TodoInput;
