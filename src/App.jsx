import Search from './component/Search/Search';
import List from './component/List/List';
import React, { Component } from 'react'


export default class App extends Component {

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  };

  updateState=(stateObj)=>{
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState}/>
        <List {...this.state}/>
      </div>
    )
  }
}