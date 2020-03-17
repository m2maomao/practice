import React from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

interface Greeting {
    name: string
}

const Hello = (props:Greeting) => <Button type="primary">Hello, {props.name}</Button>

export default Hello