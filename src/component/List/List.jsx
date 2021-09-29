import React, { Component } from 'react'
import Item from '../Item/Item'

export default class List extends Component {
    render() {
        return (
        <div className="row">
          {
            this.props.users.map((userObj)=>{
              return(
                <Item userObj={userObj}/>
              )
            })
          }
        </div>
        )
    }
}
