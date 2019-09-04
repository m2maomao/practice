import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import {changeInputAction, addItemAction, deleteItemAction, getTodoList} from './store/actionCreators'

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem = (index) => {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    render() { 
        const {inputValue, list} = this.state
        return ( 
            <TodoListUI
                inputValue = {inputValue}
                list = {list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
         )
    }
}
 
export default TodoList;