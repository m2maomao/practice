import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { IStoreState } from '../types/index';

const store = createStore<IStoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'I\'m fluent in Math and Klingon',
  });
export default store;