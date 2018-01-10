import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';
import './common/style/other.css';

import dog from './common/img/avatar.png';

console.log(dog);

ReactDOM.render(
    <div className="blue_background">
        <img src={require('./common/img/avatar.png')} alt="" />
        <img src={dog} />
    </div>, 
    document.getElementById('root')
) 