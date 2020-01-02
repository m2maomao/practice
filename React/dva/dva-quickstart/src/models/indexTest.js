import * as apis from '../services/example'

export default {
    namespace:'indexTest',
    state: {
        name: 'Msea',
        cnodeData: []
    },
    reducers: {
        setName (state,payLoad) {
            // console.log('run')
            // console.log('payLoad', payLoad)
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = payLoad.data.name
            return _state
        },
        setCnodeDataList(state,payLoad) {
            let _state = JSON.parse(JSON.stringify(state))
            _state.cnodeData=payLoad.data
            console.log(_state)
            return _state
        },
        testPath(state,payLoad) {
            console.log('用户也~~~~')
            return state
        }
    },
    // 异步
    effects: {
        *setNameAsync ({payLoad}, {put,call}) {
            yield put({
                type:"setName",
                data:{
                    name: "chaorenqiang"
                }
            })
            yield console.log('run')
        },
        *testCnode ({payLoad}, {put,call}){
            let rel = yield call(apis.testCnode)
            if (rel.data) {
                yield put({
                    type: 'setCnodeDataList',
                    data:rel.data.data
                })
                console.log('rel', rel.data.data)    
            }
        }
    },
    subscriptions: {
        haha({dispatch, history}) {
            history.listen(({pathname})=> {
                if(pathname === '/user') {
                    // console.log('用户页')
                    dispatch({
                        type: 'testPath'
                    })
                }
            })
        }
    }
}