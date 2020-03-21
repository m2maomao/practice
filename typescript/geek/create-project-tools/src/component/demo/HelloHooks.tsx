import React, {useEffect, useState} from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

const HelloHooks = (props:Greeting) => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState<string | null>(null)
    // 每次渲染都执行
    useEffect(() => {
        if (count > 5) {
            setText('休息一下')
        }
    }, [count])
    return (
        <>
            <p>你点击了{count} {text}</p>
            <Button onClick={() => setCount(count + 1)}>Hello {props.name}</Button>
        </>
    )
}

// 默认属性
HelloHooks.defaultProps = {
    firstName: "",
    lastName: ""
}

export default HelloHooks