import React from 'react';

interface IProps {
    name: string,
    age: number
}

/* const Func = ({age}: IProps) => {
    // const [name, setName] = React.useState(props.name);
    return (
        <div>
        Func {age}
        </div>
    )
} */
const Func: React.FunctionComponent<IProps> = ({age, name}) => {
    const [myName, setMyName] = React.useState<string>(name);
    return (
        <div>
            Func {age}
        </div>
    )
}

export default Func;