import Chance from 'chance';
import React from 'react';
import Exam from '../../state/exams/exam';

const chance = new Chance();

export const mockEvent = () => {
  return {
    target: {
      value: chance.string()
    }
  };
};

export const mockUrl = () => '/' + chance.url();

export const mockComponent = () => <div data-testid="mock-component" />;

export const mockAppState = overRides => {
  return {
    modal: chance.string(),
    ...overRides
  };
};

export const mockClassesState = () => {
  return [
    { name: chance.string(), subject: chance.string() },
    { name: chance.string(), subject: chance.string() },
    { name: chance.string(), subject: chance.string() },
    { name: chance.string(), subject: chance.string() },
    { name: chance.string(), subject: chance.string() }
  ];
};

export const mockExam = () => {
  return Exam({
    name: chance.string(),
    subject: chance.string()
  });
};
