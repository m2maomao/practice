import React from 'react';
import {connect} from 'dva';

class IndexPage extends React.Component {
  handleSetName = () => {
    this.props.dispatch({
      type: "indexTest/setName",
      data:{
        name:"猪猪侠"
      }
    })
  }
  handleSetNameAsync = () => {
    this.props.dispatch({
      type: "indexTest/setNameAsync"
    })
  }
  render() {
    return (
      <div>
        首页~~~{this.props.msg}
        <div>
          {
            this.props.name
          }
        </div>
        <button onClick={this.handleSetName}>SetName</button>
        <button onClick={this.handleSetNameAsync}>SetNameAsync</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    msg:"我爱北京天安门",
    name: state.indexTest.name
  }
}

export default connect(mapStateToProps)(IndexPage);
