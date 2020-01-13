import {CHANGE_VALUE, ADD_ITEM, DELETE_ITEM} from './actionTypes'

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