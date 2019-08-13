import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { Route, NavLink, Redirect} from 'react-router-dom';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><NavLink to="/home" className="link">首页</NavLink></li>
          <li><NavLink to="/about" className="link">关于我们</NavLink></li>
        </ul>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/home" />
      </div>
    );
  }
}

export default App;
