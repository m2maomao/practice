import {CHANGE_VALUE, ADD_ITEM, DELETE_ITEM} from './actionTypes'
const defaultValue = {
    inputValue: 'Write Something',
    list: [
        '1',
        '2',
        '3'
    ]
}
export default(state = defaultValue, action) => {
    console.log(state,action)
    if(action.type === CHANGE_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}