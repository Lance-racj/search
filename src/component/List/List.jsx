import React, { Component } from 'react'
import Item from '../Item/Item'

export default class List extends Component {
    render() {

      const {users,isFirst,isLoading,err} = this.props;

        return (
          isFirst ? <h2>Welcome to here</h2> :
          isLoading ? <h2>Please wait a minute.......</h2> :
          err ? <h3>{err.message}</h3> :
          <div className="row">
            {
              users.map((userObj)=>{
                return(
                  <Item userObj={userObj}/>
                )
              })
            }
          </div> 
        )
    }
}
