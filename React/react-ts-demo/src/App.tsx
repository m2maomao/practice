import React from 'react';
import Hello from './components/Hello';
import List from './pages/List'

class App extends React.Component {
  myClickHandler = (data:string) => {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <div>Hello Typescript</div>
        <Hello title="我是标题" age={123} onMyClick={this.myClickHandler} />
        <hr />
        <List />
      </div>
    );  
  }
}

export default App;
