import Chance from 'chance';

const chance = new Chance();

export const mockUrl = '/' + chance.url();
