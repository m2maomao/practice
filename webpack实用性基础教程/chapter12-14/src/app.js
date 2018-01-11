import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';
import './common/style/aac.css';

import style2 from './main.css';
console.log(style2);

ReactDOM.render(
    <div className="ot">
        <span className="ot">React1</span>
        <span className={style2.ok}>ok</span>
        <span className={style2.ok2}>ok2</span>
    </div>, 
    document.getElementById('root')
) 