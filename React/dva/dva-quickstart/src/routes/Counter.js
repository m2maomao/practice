import React, {Fragment} from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'


class Counter extends React.Component {
    addHandle = () => {
        console.log(this.props)
        this.props.dispatch({
            type: 'count/add'
        })
    }
    minusHandle = () => {
        this.props.dispatch({
            type: 'count/minus'
        })
    }
    render(){
        return (
            <Fragment>
                <div>计数：{this.props.count}</div>
                <button onClick={this.addHandle}>+</button>
                <button onClick={this.minusHandle}>-</button>
                <Link to='/'>首页</Link>
            </Fragment>
        )
    }
}
export default connect(({ count }) => ({
count
}))(Counter)

