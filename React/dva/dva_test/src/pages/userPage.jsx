import React, {Fragment} from 'react';
import {Link} from 'dva/router';
import Child from '../components/child'

class userPage extends React.Component {
    handleToIndex = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <Fragment>
                <div>我是用户页</div>
                <Link to="/">首页</Link>
                <button onClick={this.handleToIndex}>跳转到首页</button>
                <Child />
            </Fragment>
        )
    }
}
export default userPage;
