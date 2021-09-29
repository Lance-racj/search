import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search=()=>{
        //获取用户的输入
        const {value:keyvalues} = this.refs.keyvalue;
        //发起网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyvalues}`).then(
            response => {this.props.saveUsers(response.data.items)},
            error => {console.log('fail');}
        )
    }

    render() {
        return (
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref = "keyvalue" type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
          </div>
        </section>
        )
    }
}
