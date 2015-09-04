var AppDispatcher = require('../dispatcher/app_dispatcher');

var TodoActions = {
  createTodo: function(todo) {
    AppDispatcher.dispatch({
      type: 'create_todo',
      payload: todo
    });
  },

  updateTodo: function(todo) {
    AppDispatcher.dispatch({
      type: 'update_todo',
      payload: todo
    });
  },

  removeTodo: function(todo) {
    AppDispatcher.dispatch({
      type: 'remove_todo',
      payload: todo
    });
  }
};

module.exports = TodoActions;
