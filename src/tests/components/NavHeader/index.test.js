import React from 'react';

import NavHeader from '../../../components/NavHeader';
import { renderWithRouter } from '../../testUtils';

describe('NavHeader', () => {
  it('should contain the app title', () => {
    const { queryByTestId } = renderWithRouter(<NavHeader />);
    expect(queryByTestId('app-title')).toBeInTheDocument();
  });

  it('should contain the main nav links', () => {
    const { queryByText } = renderWithRouter(<NavHeader />);

    expect(queryByText('Classes')).toBeInTheDocument();
    expect(queryByText('Exams')).toBeInTheDocument();
    expect(queryByText('Quizzes')).toBeInTheDocument();
  });

  it('should contain a drop down for user actions', () => {
    const { queryByText } = renderWithRouter(<NavHeader />);

    expect(queryByText('Actions')).toBeInTheDocument();
    expect(queryByText('Create Exam')).toBeInTheDocument();
  });

  it('should contain a search field', () => {
    const { queryByTestId } = renderWithRouter(<NavHeader />);
    expect(queryByTestId('input-with-label')).toBeInTheDocument();
  });
});
