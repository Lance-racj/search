import React, { Component } from 'react'
import Item from '../Item/Item'

export default class List extends Component {
  
    render() {
      const {users} = this.props.alldata;
      console.log(this.props);
        return (
          <div className="row">
            {
              users.map((userObj)=>{
                return(
                  <Item userObj={userObj} key={userObj.id}/>
                )
              })
            }
          </div> 
        )
    }
}