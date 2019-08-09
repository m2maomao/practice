import React, {Component} from 'react'
import Add from './components/add/Add'
import List from './components/list/List'

export default class App extends Component {
  state = {comments:[
    {
      userId:'001',userName:'毛毛',content:'react is so Easy'
    },
    {
      userId:'002',userName:'欣欣',content:'react is so Hard'
    }
  ]}
  addComment = (commentObj) => {
    let comments = [...this.state.comments]
    comments.unshift(commentObj)
    this.setState({comments})
  }
  removeComment = (id) => {
    let comments = [...this.state.comments]
    comments.forEach((item,index) => {
      if(item.userId === id) {
        comments.splice(index,1)
      }
    })
    this.setState({comments})
  }
  render() {
    let {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment = {this.addComment}/>
          <List comments={comments} removeComment = {this.removeComment}/>
        </div>
      </div>
    )
  }
}