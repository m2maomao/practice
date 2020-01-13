import {CHANGE_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeValueAction = (value)=> ({
    type: CHANGE_VALUE,
    value
})

export const addItemAction = () => ({
    type:ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://yapi.demo.qunar.com/mock/76166/todolist/list').then((res) => {
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}