import React from 'react';

import NavHeader from '../../../components/NavHeader';
import { renderWithReduxAndRouter } from '../../testUtils';

describe('NavHeader', () => {
  it('should contain the app title', () => {
    const { queryByTestId } = renderWithReduxAndRouter(<NavHeader />);
    expect(queryByTestId('app-title')).toBeInTheDocument();
  });

  it('should contain the main nav links', () => {
    const { queryByText } = renderWithReduxAndRouter(<NavHeader />);

    expect(queryByText('Classes')).toBeInTheDocument();
    expect(queryByText('Exams')).toBeInTheDocument();
    expect(queryByText('Quizzes')).toBeInTheDocument();
  });

  it('should contain a drop down for user actions', () => {
    const { queryByText } = renderWithReduxAndRouter(<NavHeader />);

    expect(queryByText('Actions')).toBeInTheDocument();
    expect(queryByText('Create Exam')).toBeInTheDocument();
  });

  it('should contain a search field', () => {
    const { queryByTestId } = renderWithReduxAndRouter(<NavHeader />);
    expect(queryByTestId('input-with-label')).toBeInTheDocument();
  });
});
