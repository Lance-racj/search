import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {


    render() {
        let {userObj} = this.props;
        return (
            <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                <img alt="" src={userObj.avatar_url} style={{width:'100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
            </div>
        )
    }
}
