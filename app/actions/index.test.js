import * as types from './types';
import * as actions from './';

describe('actions', () => {
  it('should create an action to change the filter type', () => {
    const args = ['TEST'];
    const result = {
      type: types.CHANGE_FILTER_TYPE,
      filterType: 'TEST',
    };

    expect(actions.changeFilterType.apply(null, args)).toEqual(result);
  });

  it('should create an action to add a task', () => {
    const args = [{
      id: 1,
      title: 'Task Two',
      timestamp: 0,
    }];
    const state = {
      tasks: {
        tasks: [{
          id: 1,
          type: 'CURRENT',
          timestamp: 0,
          title: 'Task One',
        }],
      },
    };
    const result = {
      type: types.ADD_TASK,
      task: {
        id: 2,
        type: 'CURRENT',
        timestamp: 0,
        title: 'Task Two',
      },
    };

    actions.addTask.apply(null, args)((test) => {
      expect(test).toEqual(result);
    }, () => state);
  });

  it('should create an action if there are not other tasks to increment from', () => {
    const args = [{
      id: 1,
      title: 'Only task',
      timestamp: 0,
    }];
    const state = {
      tasks: {
        tasks: [],
      },
    };
    const result = {
      type: types.ADD_TASK,
      task: {
        id: 1,
        type: 'CURRENT',
        timestamp: 0,
        title: 'Only task',
      },
    };
    actions.addTask.apply(null, args)((test) => {
      expect(test).toEqual(result);
    }, () => state);
  });

  it('should create an action to change a task type', () => {
    const args = [1, 'TEST'];
    const result = {
      type: types.CHANGE_TASK_TYPE,
      task: {
        id: 1,
        type: 'TEST',
      },
    };

    expect(actions.changeTaskType.apply(null, args)).toEqual(result);
  });

  it('should create an action to change a task type', () => {
    const args = [1, 'TEST'];
    const result = {
      type: types.CHANGE_NEXT_TASK_TYPE,
      id: 1,
      nextType: 'TEST',
    };

    expect(actions.changeNextTaskType.apply(null, args)).toEqual(result);
  });

  it('should create an action to remove a task', () => {
    const args = [1];
    const result = {
      type: types.REMOVE_TASK,
      id: 1,
    };

    expect(actions.removeTask.apply(null, args)).toEqual(result);
  });
});
