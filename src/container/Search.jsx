import { connect } from 'react-redux'

import SearchUI from "../component/Search/Search"

import {createSaveAction} from '../redux/actions/saveData_actioncreater'

let mapDispatchToProps=(dispatch)=>{
    return {
        saveData:(data)=>{dispatch(createSaveAction(data))}
    };
}
let mapStateToProps=(reduxstate)=>{
    return {alldata:reduxstate};
}

//mapDispatchToProps必须作为第二个参数传进去，否则无法使用
export default connect(mapStateToProps,mapDispatchToProps)(SearchUI)