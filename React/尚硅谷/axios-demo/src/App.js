import React,{Component} from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    isLoding: true,
    repoName: '',
    repoUrl: '',
    errMsg: ''
  }
  keyWord = 'v'
  async componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`
    try {
      axios.get(url).then(res => {
        this.setState({
          isLoding: false,
          repoName: res.data.items[0].name,
          repoUrl: res.data.items[0].homepage,
          errMsg: ''
        })
      })
    } catch (err) {
      this.setState({
        isLoding: false,
        repoName: '',
        repoUrl: '',
        errMsg: err.toString()
      })
      console.log(err.toString())
    }
  }
  render() {
    let {repoName, repoUrl, errMsg, isLoding} = this.state
    if(isLoding) {
      return (
        <h3>Loding...</h3>
      )
    } else if (errMsg) {
      return (
        <h3>{errMsg}</h3>
      )
    } else {
      return (
        <h2>github上包含 【{this.keyWord}】 关键字的所有仓库中，点赞数量最多的是<a href={repoUrl}>{repoName}</a></h2>
      )
    }
  }
  // 
}

export default App;
