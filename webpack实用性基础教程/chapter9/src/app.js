import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';
import './common/style/other.css';

import dog from './common/img/avatar.png';
import a from './common/img/a.jpg';
const b = require('./common/img/b.jpg');


console.log(dog);

ReactDOM.render(
    <div className="blue_background">
        <img src={dog} />
        <img src={a} />
        <img src={b} />
        <img src={require('./common/img/c.jpg')} />
    </div>, 
    document.getElementById('root')
) 