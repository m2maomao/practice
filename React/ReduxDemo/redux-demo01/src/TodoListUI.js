import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return ( 
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                    placeholder={props.inputValue}
                    style={{width:'250px', marginRight:'10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >Add</Button>
            </div>
            <div style={{marginTop:'10px', width:'310px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, i) => (<List.Item onClick={() => props.deleteItem(i)}>{item}</List.Item>)}
                />
            </div>
        </div>
    );
}
 
export default TodoListUI;