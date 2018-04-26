import Item from 'components/Item';
import Item from 'components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input type="text" className="new-todo"/>
        </header>
        <section className="main">
          <input type="checkbox" className="toggle-all"/>
          <ul className="todo-list">
            <Item />
            <Item />
            <Item />
          </ul>
        </section>
      </div>
  );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if(module.hot) {
  module.hot.accept();
}