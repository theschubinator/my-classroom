import Chance from 'chance';
import React from 'react';

import Class from '../../state/classes/class';
import Modal from '../../state/App/modal';

const chance = new Chance();

export const mockEvent = overRides => {
  return {
    target: {
      value: chance.string(),
      ...overRides
    }
  };
};

export const mockUrl = () => '/' + chance.url();

export const mockComponent = () => <div data-testid="mock-component" />;

export const mockModalState = overRides => {
  return Modal({
    type: chance.string(),
    active: false,
    ...overRides
  });
};

export const mockClassState = overRides => {
  return Class({
    name: chance.string(),
    subject: chance.string(),
    ...overRides
  });
};

export const mockClassesState = (iterations = 5) => {
  return chance.unique(mockClassState, iterations);
};
