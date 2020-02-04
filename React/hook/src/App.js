import React, { useState, useEffect } from 'react';

function App() {
  // 声明一个“count”的 state 变量
  const [count,setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log(22)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count+1)
        console.log(11)
      }}>Click me</button>
    </div>
  );
}

export default App;
