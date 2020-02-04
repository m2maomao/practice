import React from 'react'
import {withRouter} from 'dva/router'

class child extends React.Component {
    handleToIndex = (props) => {
        console.log(this.props)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div>我是通用组件</div>
                <button onClick={this.handleToIndex}>首页_child</button>
            </div>
        )
    }
}

export default withRouter(child) 