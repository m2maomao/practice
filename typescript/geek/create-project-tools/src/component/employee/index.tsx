import React, { Component } from 'react';
import { Table } from 'antd';

import { bindActionCreators, Dispatch} from 'redux';
import { connect} from 'react-redux';

import './index.css';

import QueryForm from './QueryForm';

import { employeeColumns } from './columns';
import {EmployeeResponse, EmployeeRequest} from '../../interface/employee';
import {getEmployee} from '../../redux/employee';

interface Props {
    onGetEmployee(params: EmployeeRequest): void;
    employeeList: EmployeeResponse;
}

class Employee extends Component<Props> {
    render() {
        const {employeeList, onGetEmployee} = this.props;
        console.log('this.props', this.props)
        return (
            <>
                <QueryForm getData={onGetEmployee} />
                <Table columns={employeeColumns} dataSource={employeeList} className="table" />
            </>
        )
    }
}
// 第一件事：将redux store上的状态映射到组件上的一个状态
const mapStateToProps = (state: any) => ({
    employeeList: state.employee.employeeList
});
// 第二件事：把更新状态的action也映射到了Employee组件的属性上
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetEmployee: getEmployee
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee)