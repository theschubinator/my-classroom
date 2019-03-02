import t from 'tcomb';
import Class from './class';

const Classes = t.list(Class, 'ClassesState');

export const getDefaultState = () => Classes([]);

export default Classes;
