import Search from './container/Search';
import List from './container/List';
import React, { Component } from 'react'
import store from './redux/store'


export default class App extends Component {

  componentDidMount(){
    store.subscribe(()=>{
        this.setState({});
    })
}

  render() {
    return (
      <div className="container">
        <Search store={store}/>
        <List store={store}/>
      </div>
    )
  }
}