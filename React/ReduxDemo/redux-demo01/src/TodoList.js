import React, { Component } from 'react'; // imrc
import store from './store'
import {changeValueAction, addItemAction, deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component { // ccc
    constructor(props) {
       super(props);
       this.state = store.getState()
    }
    changeInputValue = (e) => {
        const action = changeValueAction(e.target.value)
        store.dispatch(action)
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem = (index) => {
        console.log('index', index)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() { 
        return ( 
            <TodoListUI
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }
}
 
export default TodoList;