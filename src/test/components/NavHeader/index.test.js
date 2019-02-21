import NavHeader from '../../../components/NavHeader';
import React from 'react';

import { render } from 'react-testing-library';

describe('NavHeader', () => {
  const { getByText, getByLabelText, queryByTestId } = render(<NavHeader />);

  it('should exist', () => {
    expect(queryByTestId('nav-header')).not.toBeNull();
  });

  it('should display the app logo', () => {
    expect(getByText('My Classroom').textContent).toBe('My Classroom');
  });

  describe('the Classes Link', () => {
    const link = getByText('Classes');

    it('should exist', () => {
      expect(link.textContent).toBe('Classes');
    });
  });

  describe('the Tests Link', () => {
    const link = getByText('Tests');

    it('should exist', () => {
      expect(link.textContent).toBe('Tests');
    });
  });

  describe('the Quizzes Link', () => {
    const link = getByText('Quizzes');

    it('should exist', () => {
      expect(link.textContent).toBe('Quizzes');
    });
  });

  describe('the Actions dropDown', () => {
    const dropDown = getByText('Actions');

    it('should exist', () => {
      expect(dropDown.textContent).toBe('Actions');
    });
  });

  describe('the Search Input', () => {
    const input = getByLabelText('Search');

    it('should exist', () => {
      expect(input).not.toBeNull();
    });
  });
});
