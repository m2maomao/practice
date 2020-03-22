import React, { Component } from 'react';
import { Table } from 'antd';

import './index.css';

import QueryForm from './QueryForm';

import { employeeColumns } from './columns';
import {EmployeeResponse} from '../../interface/employee';

interface State {
    employee: EmployeeResponse
}

class Employee extends Component<{}, State> {
    // 初始状态
    state: State = {
        employee: undefined
    }
    setEmployee = (employee:EmployeeResponse) => {
        this.setState({
            employee
        })
    }
    getTotal = () => {
        // 类型保护
        let total: number;
        if (typeof this.state.employee !== 'undefined') {
            total = this.state.employee.length
        } else {
            total = 0
        }
        return <p>共有 {total} 名员工</p>
    }
    render() {
        return (
            <>
                <QueryForm onDataChange={this.setEmployee} />
                {this.getTotal()}
                {/* 如何渲染，可以给父组件，也就是Employee绑定状态 */}
                <Table columns={employeeColumns} dataSource={this.state.employee} className="table" />
            </>
        )
    }
}

export default Employee;