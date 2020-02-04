import React, {Fragment} from 'react'
import {Link} from 'dva/router'
import Child from '../components/child'
class userPage extends React.Component {
    handleToIndex = () => {
        // console.log(this.props)
        this.props.history.push('/')
    }
    render() {
        return (
            <Fragment>
                <Child />
                <div>user page</div>
                <Link to="/">Index page</Link>
                <button onClick={this.handleToIndex}>Index</button>
            </Fragment>
        )
    }
}

export default userPage