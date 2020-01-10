import React, { Component } from 'react'; // imrc
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {CHANGE_VALUE, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'

class TodoList extends Component { // ccc
    constructor(props) {
       super(props);
       this.state = store.getState()
    }
    changeInputValue = (e) => {
        const action = {
            type: CHANGE_VALUE,
            value: e.target.value
        }
        store.dispatch(action)
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    clickBtn = () => {
        const action = {
            type:ADD_ITEM
        }
        store.dispatch(action)
    }
    deleteItem = (index) => {
        console.log('index', index)
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                    >Add</Button>
                </div>
                <div style={{marginTop:'10px', width:'310px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, i) => (<List.Item onClick={() => this.deleteItem(i)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoList;