import React from 'react';
import Hello from './components/Hello';
import List from './pages/List';


class App extends React.Component {

  myClickHandler = (data:string) => {
    console.log('App Event')
    console.log(data)
  };
  render() {
    return (
      <div className="App">
        123
        <Hello title={"标题"} age={200} onMyClick={this.myClickHandler} />
        <List />
      </div>
    );
  }
  
}

export default App;
