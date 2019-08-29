import React, { Component } from 'react';

interface IProps {
    name: string;
    age?: number;
}

interface IState {
    name: string;
    age: number;
    [key:string]:number | string;
}

class Form extends Component<{}, IState> {
    state = {
        name:'Michael',
        age: 111
    }

    handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        const {name, value}: {name:keyof IState, value: number | string} = e.currentTarget;
        this.setState({
            [name]:value
        })
    }

    render(){
        return (
            <div>
                {this.state.age}
                <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
            </div>
        )
    }
}

export default Form;
