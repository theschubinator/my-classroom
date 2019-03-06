import React from 'react';

import CreateExam from '../../../../components/teacher/CreateExam';
import { renderWithRedux } from '../../../testUtils';

describe('Given CreateExam', () => {
  describe('and the component mounts', () => {
    it('should load the modalType', () => {
      const { store } = renderWithRedux(<CreateExam />);
      expect(store.getState().app.modal.type).toBe('CREATE_EXAM');
    });

    it('should toggle the modal to an active state', () => {
      const { store } = renderWithRedux(<CreateExam />);
      expect(store.getState().app.modal.active).toBeTruthy();
    });
  });
});
