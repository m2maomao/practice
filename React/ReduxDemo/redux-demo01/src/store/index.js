import {createStore} from 'redux' // 引入redux中createStore方法
import reducer from './reducer'

const store = createStore(
    reducer, // 初始化store,传递reducer，reducer注入
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store // 导出store