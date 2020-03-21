import React, {Component} from 'react' // 实现类组件，需要让类继承Component
import {Button} from 'antd'
import 'antd/dist/antd.css'

interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

interface State {
    count: number
}

class HelloClass extends Component<Greeting, State> {
    state: State = {
        count: 0
    }
    static defaultProps = {
        firstName: '',
        lastName: ''
    }
    render() {
        return (
            <>
                <p>你点击了{this.state.count}</p>
                <Button onClick={() => this.setState({count: this.state.count + 1})}>Hello {this.props.name}</Button>
            </>
        )
    }
}


export default HelloClass