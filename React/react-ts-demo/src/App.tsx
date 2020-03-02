import React from 'react';
import Hello from './components/Hello';
import List from './pages/List';

import * as actions from './actions/';
import {IStoreState} from './types/index';
import { connect } from 'react-redux';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class App extends React.Component<IProps,any> {
  myClickHandler = (data:string) => {
    console.log(data);
  }

  render() {
    const {name, enthusiasmLevel, onIncrement, onDecrement} = this.props;
    return (
      <div className="App">
        <div>Hello Typescript</div>
        <Hello title="我是标题" age={123} onMyClick={this.myClickHandler} />
        <hr />
        <List />
        <p>{ name }</p>
        <p>{ enthusiasmLevel }</p>
        <button onClick={onDecrement}>+</button>
        <button onClick={onIncrement}>+</button>
      </div>
    );  
  }
}

export function mapStateToProps({enthusiasmLevel, languageName}: IStoreState) {
  return {
    enthusiasmLevel,
    name:languageName
  }
}
export function mapDispatchToProps(dispatch:any) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
