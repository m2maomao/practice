import React from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom';
import Gallery from './Gallery'
import Portfolio from './Portfolio'
import '../Global.css'

class About extends React.Component {
  render() {
    return (
      <div>
        <h3>This is About页面</h3>
        <ul>
          <li><NavLink to="/about/gallery" className="simple-link" activeClassName="active-link">Gallery</NavLink></li>
          <li><NavLink to="/about/portfolio" className="simple-link" activeClassName="active-link">Portfolio</NavLink></li>
        </ul>
        <Route path="/about/gallery" component={Gallery} />
        <Route path="/about/portfolio" component={Portfolio} />
        <Redirect to="/about/gallery" />
      </div>
    )
  }
}

export default About;