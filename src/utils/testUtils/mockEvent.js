import Chance from 'chance';

const chance = new Chance();

export const mockEvent = {
  target: {
    value: chance.string()
  }
};
