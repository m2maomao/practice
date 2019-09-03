const defaultState = {
    inputValue:'Write Something',
    list: [
        '早8点开晨会',
        '中午12点午餐',
        '晚上10点睡觉'
    ]
}
export default (state = defaultState,action) => {
    console.log(state, action)
    // Reducer里只能接收state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}