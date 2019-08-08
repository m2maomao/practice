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
          <Add />
          <List comments={comments}/>
        </div>
      </div>
    )
  }
}