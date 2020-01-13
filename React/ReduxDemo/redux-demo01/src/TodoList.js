import React, { Component } from 'react'; // imrc
import store from './store'
import {changeValueAction, addItemAction, deleteItemAction, getListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
class TodoList extends Component { // ccc
    constructor(props) {
       super(props);
       this.state = store.getState()
       store.subscribe(this.storeChange)
    }
    componentDidMount() {
        axios.get('http://yapi.demo.qunar.com/mock/76166/todolist/list').then((res) => {
            console.log(res)
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
        
    }
    changeInputValue = (e) => {
        const action = changeValueAction(e.target.value)
        store.dispatch(action)
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