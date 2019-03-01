import * as types from '../../actions/action-list';

describe('Actions List', () => {
  it('should use a unique value for each action', () => {
    const sortedActionValues = Object.values(types).sort();
    sortedActionValues.reduce((current, next) => {
      expect(current).not.toBe(next);
    });
  });
});
