import React from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

const Hello = (props:Greeting) => <Button type="primary">Hello, {props.name}</Button>

// const Hello: React.FC<Greeting> = (props) => <Button type="primary">Hello, {props.name}</Button>
// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
//     children
// }) => <Button type="primary">Hello, {name}</Button>

// 默认属性
Hello.defaultProps = {
    firstName: "",
    lastName: ""
}

export default Hello