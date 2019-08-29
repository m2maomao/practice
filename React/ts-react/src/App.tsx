import React from 'react';
import Hello from './components/Hello';


const App: React.FC = () => {

  myClickHandler() {
    console.log('111')
  };

  return (
    <div className="App">
     123
     <Hello title={"标题"} age={200} onMyClick={this.myClickHandler} />
    </div>
  );
}

export default App;
