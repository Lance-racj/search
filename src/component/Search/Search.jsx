import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search=()=>{
        //用户点击之后，将first设置为false，loading设置为加载中
        // this.props.updateState({isFirst:false,isLoading:true,err:''});
        //获取用户的输入
        const {value:keyvalues} = this.refs.keyvalue;
        //发起网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyvalues}`).then(
          //用户请求成功之后，更新状态
            response => {this.props.saveData(response.data.items)},
          //发生错误之后也更新一下状态
            error => {}
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
