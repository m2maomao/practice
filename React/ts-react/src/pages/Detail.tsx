import React from 'react'
interface IProps {
    match:{
        params:{}
    }
}


export default class Detail extends React.Component<IProps> {
    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params)
    }
    
    render() {
        return (
            <div>Detail</div>
        )
    }
}