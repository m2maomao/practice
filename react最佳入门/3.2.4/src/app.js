import Item from 'components/Item';
import Footer from 'components/Footer';

require('common/style/base.css');
require('common/style/index.css');



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosData:[]
    }
    this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
  }
  
  handleKeyDownPost(ev) {
    
    if(ev.keyCode !== 13) return;
    
    let value = ev.target.value.trim();
    
    if(value==='') {
      return;
    }
    
    let todo = {};
    todo.id = new Date().getTime();
    todo.value = value;
    todo.hasCompleted = false;
    
    let {todosData} = this.state;
    
    todosData.push(todo);
    
    this.setState({todosData});
    
    ev.target.value = '';
    
  }
  
  onDestroy( todo ) {
    let {todosData} = this.state;
    
    todosData = todosData.filter((elt) =>{
      return elt.id !== todo.id;
    })
    
    this.setState({todosData});
  }
  
  onClearCompleted(){
    let {todosData} = this.state;
    
    todosData = todosData.filter((elt)=>{
      return !elt.hasCompleted;
    });
    
    this.setState({todosData});
  }
  
  
  render() {
    
    let {handleKeyDownPost, onDestroy, onClearCompleted} = this;
    
    let {todosData} = this.state;
    
    let items = null;
    
    items = todosData.map((elt,i)=>{
      return (
        <Item
          {...{
              onDestroy,
              todo:elt
          }}
          key = {i}
        />
      );
    })
    
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input 
            type="text" 
            className="new-todo"
            onKeyDown = {handleKeyDownPost}
          />
        </header>
        <section className="main">
          <input type="checkbox" className="toggle-all"/>
          <ul className="todo-list">
            {items}
          </ul>
        </section>
        <Footer />
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