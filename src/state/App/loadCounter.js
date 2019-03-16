import t from 'tcomb';

const LoadCounter = t.struct(
  {
    count: t.Number
  },
  { name: 'LoadCounterState', strict: true }
);

export const getDefaultState = () =>
  LoadCounter({
    count: 0
  });

export default LoadCounter;
