import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.props.inputValue}
                        style={{width:'250px', marginRight:'10px'}}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.props.clickBtn}
                    >Add</Button>
                </div>
                <div style={{marginTop:'10px', width:'310px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, i) => (<List.Item onClick={() => this.props.deleteItem(i)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoListUI;