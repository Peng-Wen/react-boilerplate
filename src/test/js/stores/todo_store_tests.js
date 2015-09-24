var expect = require('expect.js');
var sinon = require('sinon');
var TodoStore = require('../../../js/stores/todo_store');
var TodoConstants = require('../../../js/constants/todo_constants');

describe('TodoStore', function() {
  describe('#dispatcherCallback', function() {
    var createTodoAction = {
      type: TodoConstants.TODO_CREATE,
      payload: {
        description: 'newly created todo',
        done: false
      }
    };

    afterEach(function() {
      TodoStore.reset();
    });

    it('should create a todo after processing a create action', function() {
      TodoStore.dispatcherCallback(createTodoAction);
      expect(TodoStore.getAllTodos()).to.eql([{id: 1, description: 'newly created todo', done: false}]);
    });

    it('should update a todo after processing an update action', function() {
      expect(TodoStore.getAllTodos().length).to.be(0);

      TodoStore.dispatcherCallback(createTodoAction);

      TodoStore.dispatcherCallback({
        type: TodoConstants.TODO_UPDATE,
        payload: {
          id: TodoStore.getAllTodos()[0].id,
          description: 'edited todo',
          done: true
        }
      });
      expect(TodoStore.getAllTodos()).to.eql([{id: 1, description: 'edited todo', done: true}]);
    });

    it('should remove a todo after processing a remove action', function() {
      expect(TodoStore.getAllTodos().length).to.be(0);

      TodoStore.dispatcherCallback(createTodoAction);

      expect(TodoStore.getAllTodos().length).to.be(1);

      TodoStore.dispatcherCallback({
        type: TodoConstants.TODO_REMOVE,
        payload: {
          id: TodoStore.getAllTodos()[0].id
        }
      });

      expect(TodoStore.getAllTodos()).to.eql([]);
    });
  });
});
