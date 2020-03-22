import { Dispatch } from 'redux';

import { get } from '../../utils/request';
import { GET_EMPLOYEE_URL } from '../../constants/urls';
import { GET_EMPLOYEE } from '../../constants/actions';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';
// 定义类型，State类型就是后端返回接口的类型，我们需要把State指定为Readonly，这样后面如果有修改State的情况就会报错，只对一级数据有作用
type State = Readonly<{
    employeeList: EmployeeResponse
}>
// 定义类型
type Action = {
    type: string;
    payload: EmployeeResponse;
}
// 状态的初始值
const initialState: State = {
    employeeList: undefined
}
// action creator,这是一个比较经典的redux-thunk的写法
export function getEmployee(param: EmployeeRequest) {
    return (dispatch: Dispatch) => {
        get(GET_EMPLOYEE_URL, param).then(res => {
            dispatch({
                type: GET_EMPLOYEE,
                payload: res.data
            })
        })
    }
}
// reducer逻辑
export default function(state = initialState, action: Action) {
    switch(action.type) {
        case GET_EMPLOYEE:
            return {
                ...state,
                employeeList: action.payload
            }
        default:
            return state
    }
}