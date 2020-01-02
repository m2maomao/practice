export default {
    namespace:"indexTest",
    state: {
        name: 'Michael'
    },
    reducers: {
        setName (state, payLoad) {
            console.log(payLoad)
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = payLoad.data.name
            return _state
        }
    },
    effects: {
        *setNameAsync ({payLoad}, {put,call}) {
            yield put({
                type: "setName",
                data:{
                    name: '超人强'
                }
            })
        }
    }
}