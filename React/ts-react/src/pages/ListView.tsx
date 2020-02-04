import React, { Component } from 'react';

interface IProps {
    data: {
        letter:string,
        list:[
            {
                id:number,
                name:string
            }
        ]
    },
}

export default class ListView extends Component<IProps> {
    render() {
        const { letter, list } = this.props.data
        return (
            <li>
                <p>{letter}</p>
                <div>
                    {
                        list.map((item,index) => {
                            return (
                                <div key={index}>
                                    <i>{item.id} </i>   
                                    <a href={'#/detail/'+item.id}> {item.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </li>
        )
    }
}