import React from 'react';
import ListView from '../components/ListView';

interface IState {
    dataInfo: []
}

class List extends React.Component<{},IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            dataInfo:[]
        }
    }

    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/user/alsotang').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                dataInfo: data.data.recent_topics
            })
        })
    }

    public render() {
        return (
            <div>
                {
                    this.state.dataInfo.length > 0
                    ?
                    <ul>
                        {
                            this.state.dataInfo.map((item,index) => {
                                return <ListView key={index} data={item} />
                            })
                        }
                    </ul>
                    :
                    <div>暂无数据</div>
                }
            </div>
        )
    }
}

export default List