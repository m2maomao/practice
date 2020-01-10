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
    if(action.type === 'changeValue') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'addItem') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}