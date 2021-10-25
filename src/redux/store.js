import {createStore,combineReducers} from 'redux'
import saveDataReducer from '../redux/reducers/saveData_reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

//合并reducers,combineReducers里面传入的对象值就是store里面保存的值
const allReducers = combineReducers({
    users:saveDataReducer
})
//将创建的store默认暴露出去，整个文件只有一个store
export default createStore(allReducers,composeWithDevTools());