import React from 'react';

interface IProps {
    name: string,
    age: number
}

const Func = ({name,age}: IProps) => {
    return (
        <div>
        Func {name} {age}
        </div>
    )
}

export default Func;