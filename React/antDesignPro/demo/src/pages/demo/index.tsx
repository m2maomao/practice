import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';
 
class Index extends React.Component {
    render() {
        return (
            <PageHeaderWrapper>
                <Card bordered={false}>this is demo page!!!</Card>
            </PageHeaderWrapper>
        )
    }
}
 
export default Index;