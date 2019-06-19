import React from 'react';
import ReactDOM from 'react-dom';

// import './common/style/main.css';
// import './common/style/aac.css';

// import style2 from './main.css';

import './common/style/main.less';
import style from './main.less'


ReactDOM.render(
    // <div className="ot">
    //     <span className="ot">React1</span>
    //     <span className={style2.ok}>ok</span>
    //     <span className={style2.ok2}>ok2</span>
    // </div>
    <div className="ot">less应用的文案
        <span className={style.ob}>OB use module css style</span>
    </div>
    , 
    document.getElementById('root')
) 