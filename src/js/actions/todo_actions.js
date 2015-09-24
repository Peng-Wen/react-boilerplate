var AppDispatcher = require('../dispatcher/app_dispatcher');
var TodoConstants = require('../constants/todo_constants');

var TodoActions = {
  createTodo: function(todo) {
    AppDispatcher.dispatch({
      type: TodoConstants.TODO_CREATE,
      payload: todo
    });
  },

  updateTodo: function(todo) {
    AppDispatcher.dispatch({
      type: TodoConstants.TODO_UPDATE,
      payload: todo
    });
  },

  removeTodo: function(todo) {
    AppDispatcher.dispatch({
      type: TodoConstants.TODO_REMOVE,
      payload: todo
    });
  }
};

module.exports = TodoActions;
