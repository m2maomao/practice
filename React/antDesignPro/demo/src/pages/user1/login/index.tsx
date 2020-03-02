import React, { Component } from 'react';
import {Tabs, Form, Input, Button, Checkbox} from 'antd';
import styles from './style.less';
import { LockOutlined, UserOutlined, MailTwoTone, MobileTwoTone } from '@ant-design/icons';

const Index = () => {
    const [form] = Form.useForm();
    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
    };
    const changeLoginType = (value:any) => {
        console.log(value)
    }
    return ( 
        <div className={styles.main}>
            <Form onFinish={onFinish} form={form}>
                <Tabs onChange={changeLoginType}>
                    <Tabs.TabPane tab="账户密码登陆" key="account">
                        <Form.Item name="username" rules={[{ required: true }]}>
                            <Input type="text" size="large" prefix={
                                <UserOutlined
                                    className={styles.prefixIcon}
                                />
                            }/>
                        </Form.Item>
                        <Form.Item name="password">
                            <Input type="password" size="large" prefix={
                                <LockOutlined
                                    className={styles.prefixIcon}
                                />
                            }/>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox defaultChecked={true}>自动登录</Checkbox>
                        </Form.Item>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="手机号登陆" key="mobile">
                        <Form.Item name="mobile">
                            <Input size="large" prefix={
                                <MobileTwoTone
                                    className={styles.prefixIcon}
                                />
                            }/>
                        </Form.Item>
                        <Form.Item name="code">
                            <Input size="large" prefix={
                                <MailTwoTone
                                    className={styles.prefixIcon}
                                />
                            }/>
                        </Form.Item>
                    </Tabs.TabPane>
                </Tabs>
                <Button type="primary" block size="large" onClick={form.submit}>登录</Button>
            </Form>
        </div>
    );
}

export default Index;