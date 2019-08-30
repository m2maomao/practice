import React from 'react';
import { Route, HashRouter, Switch} from 'react-router-dom';
import App from '../App'
import Detail from '../pages/Detail';

export default class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </HashRouter>
        )
    }
}