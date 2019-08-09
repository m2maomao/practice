import React, { Component } from 'react'
import Item from '../item/Item'
import './List.css'

export default class List extends Component {
  render() {
    let {comments,removeComment} = this.props
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: comments.length>0?'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item) => {
              let commentObj = {
                userId:item.userId,
                userName:item.userName,
                content:item.content
              }
              return <Item key={item.userId} {...commentObj} removeComment={removeComment}/>
            })
          }
        </ul>
      </div>
    )
  }
}
