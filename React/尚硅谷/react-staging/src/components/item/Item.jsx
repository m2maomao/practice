import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  delete = () => {
    // 1.获取要删除评论的ID
    let {userId,userName,removeComment} = this.props
    // 2.删除上述ID所对应的数据
    if(window.confirm(`确定删除${userName}的用户评论吗？`)) {
      removeComment(userId)
    }
  }
  render() {
    let {userName,content} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#1" onClick={this.delete}>删除</a>
        </div>
        <p className="user"><span >{userName}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }  
}