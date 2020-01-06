import React from 'react';
import '../components/ListView.less'

interface IProps {
    data: {
        id:String,
        title:String
    }
}

class ListView extends React.Component<IProps,{}> {
    render() {
        const {data} = this.props;
        return (
            <div>
                <ul>
                    {
                        <li>
                            <p>{data.id}</p>
                            <h5>{data.title}</h5>
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

export default ListView