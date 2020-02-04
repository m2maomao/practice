import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, isArrayLike } from 'mobx'

/* const arr = observable(['a', 'b', 'c']);

// 观察之后，数组将不是真正的数组，而是一个Observable数组
console.log(arr, Array.isArray(arr), isArrayLike(arr)); // ObservableArrayAdministration false true

// 但是可以依然像数组一样操作数据
console.log(arr[0]); // a
console.log(arr.pop()) // c */


/* const obj = observable({
  a: 1,
  b: 2
})
console.log(obj)  // ObservableObjectAdministration
console.log(typeof obj)
console.log(obj.a,obj.b)
 */

const map = observable(new Map());
console.log(map) // ObservableMap



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
