import * as apis from '../services/example';

export default {
    namespace:"indexTest",
    state: {
        name: 'Michael',
        cnodeData: []
    },
    reducers: {
        setName (state, payLoad) {
            console.log(payLoad)
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = payLoad.data.name
            return _state
        },
        setCnodeDataList(state,payLoad){
            let _state = JSON.parse(JSON.stringify(state))
            _state.cnodeData = payLoad.data
            return _state
        },
        testPath(state,payLoad) {
            console.log('执行了testPath方法!')
            return state
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
        },
        *testCnode({payLoad}, {put,call}) {
            let rel = yield call(apis.testCnode)
            if (rel.data) {
                yield put({
                    type:"setCnodeDataList",
                    data:rel.data.data
                })
            }
        }
    },
    subscriptions: {
        haha({dispatch,history}) {
            history.listen(({pathname})=>{
                if(pathname==="/userPage") {
                    console.log('用户页')
                    dispatch({
                        type:"testPath"
                    })
                }
            })
            console.log("run！！！！")
        }
    }
}