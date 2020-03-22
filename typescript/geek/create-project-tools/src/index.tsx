import React from 'react'
import ReactDOM from 'react-dom'
// let hello: string = 'Hello TypeScript'
// document.querySelectorAll('.app')[0].innerHTML = hello

// import Hello from './component/demo/Hello';
// import HelloClass from './component/demo/HelloClass';
// import HelloHOC from './component/demo/HelloHOC';
// import HelloHooks from './component/demo/HelloHooks';
// import App from './component/App'
import Root from './routers'
import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
    // <Hello name="Michael!!!" />,
    // <HelloClass name="TypeScript" />,
    // <HelloHOC name="TypeScript" loading={false} />,
    // <HelloHooks name="TypeScript" />,
    // <App />,
    // 作为外层容器
    <Provider store={store}>
        <Root />
    </Provider>,
    document.querySelectorAll('.app')[0]
)