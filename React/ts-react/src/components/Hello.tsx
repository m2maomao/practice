import React, { Component } from 'react'
import Button from 'antd/es/button'

interface IProps {
    title:string,
    age?:number,
    onMyClick: any
}

interface IState {
    count: number,
    work?: string
}

export default class Hello extends Component<IProps, IState>{

    // 实现state
    state = {
        count:10000
    }

    clickHandler = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    clickMsgHandler = () => {
        this.props.onMyClick("child msg");
    }

    render() {
        const {title, age} = this.props
        const {count} = this.state
        return (
            <div>
                <p>Hello:{title} - {age}</p>
                <p>{count}</p>
                <Button onClick={this.clickHandler}>Click Add</Button>
                <Button type="primary" onClick={ this.clickMsgHandler }>Send Message</Button>
            </div>
        )
    }
}
