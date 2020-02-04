import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './index.css';

import { Provider } from 'react-redux';
import { createStore} from 'redux'
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
})

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.getElementById('root') as HTMLElement
);
