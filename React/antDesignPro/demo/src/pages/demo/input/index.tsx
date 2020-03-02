import React, { Component } from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { Card, Icon, Input } from 'antd'

class input extends Component {
    render() { 
        return ( 
            <GridContent>
                <Card bordered={false}>
                    <Input prefix={<Icon type="user" />} />
                </Card>
            </GridContent>
        );
    }
}
 
export default input;