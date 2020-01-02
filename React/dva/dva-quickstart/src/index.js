import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva({
//     initialState: {
//         products: [
//             {name: 'dva', id: 1},
//             {name: 'antd', id: 2}
//         ]
//     }
// });
import {createBrowserHistory as createHistory} from 'history'
const app = dva({
    history: createHistory()
})
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/counter').default);
app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
