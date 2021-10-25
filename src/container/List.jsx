import { connect } from 'react-redux'
import ListUI from "../component/List/List"

let mapStateToProps=(reduxstate)=>{
    return {alldata:reduxstate};
}


export default connect(mapStateToProps)(ListUI)