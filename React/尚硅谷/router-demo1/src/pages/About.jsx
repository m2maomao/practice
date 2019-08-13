import React from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom';
import Gallery from './Gallery'
import Portfolio from './Portfolio'

class About extends React.Component {
  render() {
    return (
      <div>
        <h3>This is About页面</h3>
        <ul>
          <li><NavLink to="/about/gallery">Gallery</NavLink></li>
          <li><NavLink to="/about/portfolio">Portfolio</NavLink></li>
        </ul>
        <Route path="/about/gallery" component={Gallery} />
        <Route path="/about/portfolio" component={Portfolio} />
        <Redirect to="/about/gallery" />
      </div>
    )
  }
}

export default About;