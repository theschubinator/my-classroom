import Chance from 'chance';
import React from 'react';

const chance = new Chance();

export const mockEvent = {
  target: {
    value: chance.string()
  }
};

export const mockUrl = '/' + chance.url();

export const mockComponent = () => <div data-testid="mock-component" />;
