var expect = require('expect.js');
var sinon = require('sinon');
var TodoActions = require('../../../js/actions/todo_actions');
var AppDispatcher = require('../../../js/dispatcher/app_dispatcher');
var TodoConstants = require('../../../js/constants/todo_constants');

describe('TodoActions', function() {
  beforeEach(function() {
    sinon.stub(AppDispatcher, 'dispatch');
  });

  afterEach(function() {
    AppDispatcher.dispatch.restore();
  });

  describe('#createTodo', function() {
    it('should dispatch a create action', function() {
      TodoActions.createTodo('test payload');
      sinon.assert.calledOnce(AppDispatcher.dispatch);
      sinon.assert.calledWithExactly(AppDispatcher.dispatch, {
        type: TodoConstants.TODO_CREATE,
        payload: 'test payload'
      })
    });
  });

  describe('#updateTodo', function() {
    it('should dispatch an update action', function() {
      TodoActions.updateTodo('test payload');
      sinon.assert.calledOnce(AppDispatcher.dispatch);
      sinon.assert.calledWithExactly(AppDispatcher.dispatch, {
        type: TodoConstants.TODO_UPDATE,
        payload: 'test payload'
      })
    });
  });

  describe('#removeTodo', function() {
    it('should dispatch a remove action', function() {
      TodoActions.removeTodo('test payload');
      sinon.assert.calledOnce(AppDispatcher.dispatch);
      sinon.assert.calledWithExactly(AppDispatcher.dispatch, {
        type: TodoConstants.TODO_REMOVE,
        payload: 'test payload'
      })
    });
  });
});
