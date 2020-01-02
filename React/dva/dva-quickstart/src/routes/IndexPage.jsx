import React from 'react';
import {connect} from 'dva'
import './IndexPage.css'
import * as apis from '../services/example'

class IndexPage extends React.Component {
  handleSetName = () => {
    // console.log(this.props)
    this.props.dispatch({
      type: 'indexTest/setName',
      data: {
        name: 'zuzuxia'
      }
    })
  }
  handleSetNameAsync = () => {
    this.props.dispatch({
      type: 'indexTest/setNameAsync',
      data: {
        name: 'zuzuxia'
      }
    })
  }
  testCnode = () => {
    this.props.dispatch({
      type: 'indexTest/testCnode'
    })
  }
  componentDidMount() {
    // apis.testCnode().then((res) => {
    //   console.log(res)
    // })
    
    // 测试MOCK数据
    apis.mockData().then((res) => {
      console.log(res)
    })
  }
  render() {
    console.log('this.props', this.props)
    return (
      <div>
        <p>static data:我是首页</p>
        <p>this.props.msg:{this.props.msg}</p>
        <p>this.props.name:{this.props.name}</p>
        <ul>
          {
            this.props.cnodeData.map((item, index) => 
              <li key={item.id}>nickname:{item.author.loginname}</li>
            )
          }
        </ul>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.handleSetNameAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    msg: 'I love beijing!',
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData
  }
}
export default connect(mapStateToProps)(IndexPage)
