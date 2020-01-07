import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import App from '../App';

class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" component={App} />
            </HashRouter>
        )
    }
}

export default AppRouter