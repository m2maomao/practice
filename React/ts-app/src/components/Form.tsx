import React, { Component } from 'react';

interface IProps {
    name: string;
    age?: number;
}

// type IProps = {
//     name: string;
//     age?: number;
// }

interface Istate {
    age: number;
}

class Form extends Component<{}, Istate> {
    state = {
        age: 111
    }
    render(){
        return (
            <div>
                {this.state.age}
            </div>
        )
    }
}

export default Form;
