import Library from './library';
import component from './component';
import style1 from './style1.css';
import style2 from './style2.css';

import 'react';

document.body.appendChild(component('123456',style1.class1,style2.class1));

if(module.hot) {
  module.hot.accept('./library', () => {
    console.log('Accepting the updated library module!');
    Library.log();
  });
}