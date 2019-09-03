import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store';

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }

    changeInputValue = (e) => {
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }

    storeChange = () => {
        this.setState(store.getState())
    }
    clickBtn = () => {
        const action = {type:'addItem'}
        store.dispatch(action)
    }
    deleteItem = (index) => {
        const action = {
            type:'deleteItem',
            index
        }
        store.dispatch(action)
    }

    render() { 
        const {inputValue, list} = this.state
        return ( 
            <div>
                <div style={{ margin:'10px' }}>
                    <Input 
                        placeholder={inputValue} 
                        style={{ width:'250px', marginRight:'10px' }} 
                        onChange = {this.changeInputValue}
                        value ={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{ margin:'10px', width:'300px'}}>
                    <List 
                        bordered 
                        dataSource = {list} 
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)} 
                    />
                </div>
            </div>
         )
    }
}
 
export default TodoList;