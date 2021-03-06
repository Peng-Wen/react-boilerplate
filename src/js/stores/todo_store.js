var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var AppDispatcher = require('../dispatcher/app_dispatcher');
var TodoConstants = require('../constants/todo_constants');

var CHANGE_EVENT = 'change';
var _todos = [];

// TODO(peng-wen): use ES6 getter
var _id = 1;
var idGenerator = function() {
  return _id++;
};

var TodoStore = _.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(listener) {
    this.on(CHANGE_EVENT, listener);
  },

  removeChangeListener: function(listener) {
    this.remove(CHANGE_EVENT, listener);
  },

  getAllTodos: function() {
    return _.cloneDeep(_todos);
  },

  dispatcherCallback: function(action) {
    var todo;

    switch (action.type) {
    case TodoConstants.TODO_CREATE:
      todo = action.payload;
      todo.id = idGenerator();
      _todos.push(todo);
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_UPDATE:
      todo = action.payload;
      var oldTodo = _.find(_todos, {id: todo.id});
      if (oldTodo) {
        _.assign(oldTodo, todo);
        TodoStore.emitChange();
      }
      break;
    case TodoConstants.TODO_REMOVE:
      todo = action.payload || {};
      _.remove(_todos, {id: todo.id});
      TodoStore.emitChange();
      break;
    default:
      // no op
    }
  },

  reset: function() {
    _id = 1;
    _todos = [];
  }
});

AppDispatcher.register(TodoStore.dispatcherCallback);

module.exports = TodoStore;
