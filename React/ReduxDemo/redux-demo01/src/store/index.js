import {createStore, applyMiddleware, compose} from 'redux' // 引入redux中createStore方法, compose为增强函数
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    reducer, // 初始化store,传递reducer，reducer注入
    enhancer
)

export default store // 导出store