import React from 'react';
import {connect} from 'dva';
import * as apis from '../services/example';

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
  componentDidMount() {
    // apis.testCnode().then((res)=> {
    //   console.log(res)
    // })
    apis.mockdata().then(res => {
      console.log(res)
    })
  }
  testCnode = () => {
    this.props.dispatch({
      type:"indexTest/testCnode"
    })
  }
  render() {
    console.log(this.props)
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
        <button onClick={this.testCnode}>testCnode</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    msg:"我爱北京天安门",
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData
  }
}

export default connect(mapStateToProps)(IndexPage);
