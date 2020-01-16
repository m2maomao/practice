import React from 'react';
import Button from 'antd/lib/button';

// 通过接口声明传参类型
interface IProps {
    title: String;
    age: Number;
    work?: String;
    onMyClick:Function;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

// 通过接口声明状态
interface IState {
    count:Number
}

export default class Hello extends React.Component<IProps, IState> {
    public constructor(props:IProps) {
        super(props);
        this.state = {
            count:10000
        }
    }

    // 实现state 后期不能传任意类型
    // public readonly state: Readonly<IState> = {
    //     count:10000
    // }

    clickHandler = () => {
        this.setState({
            count: 8
        })
    }

    sendMsgHandler = () => {
        console.log('事件')
        this.props.onMyClick("child msg")
    }

    public render() {
        const {title, age, onDecrement, onIncrement} = this.props
        return (
            <div>
                <div>Michael {title}: {age}</div>
                <p>{this.state.count}</p>
                <button onClick={this.clickHandler}>按钮</button>
                <Button onClick={this.sendMsgHandler}>Send Msg</Button>
                <Button type="primary">antd-button</Button>
            </div>
        )
    }
}