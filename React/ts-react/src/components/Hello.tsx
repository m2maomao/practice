import React, { Component } from 'react'

interface IProps {
    title:string,
    age?:number
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
        console.log('ss');
    }

    render() {
        const {title, age} = this.props
        const {count} = this.state
        return (
            <div>
                <p>Hello:{title} - {age}</p>
                <p>{count}</p>
                <button onClick={ this.clickHandler }>Click Add</button>
                <button onClick={ this.clickMsgHandler }>Send Message</button>
            </div>
        )
    }
}
