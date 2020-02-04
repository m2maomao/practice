import React from 'react'
import ListView from './ListView';
interface IState {
    dataInfo:{
        list:[]
    }
}

export default class List extends React.Component<{},IState> {
    constructor(props:any) {
        super(props)
        this.state = {
            dataInfo:{
                list: []
            }
        }
    }

    public componentDidMount() {
        fetch("https://activity.51kcwc.com/car/car/index")
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataInfo: data.data
            })
            console.log(this.state.dataInfo)
        })
    }

    public render() {
        const {dataInfo} = this.state
        return (
            <div>
                {
                    dataInfo.list.length > 0 
                    ?
                    <ul>
                        {
                            dataInfo.list.map((item, index) => {
                                return <ListView data={item} key={index} />
                            })
                        }
                    </ul>
                    :
                    <div>数据加载中...</div>
                }
            </div>
        )
    }
}