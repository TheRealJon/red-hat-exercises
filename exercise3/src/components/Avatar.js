import React, { Component } from 'react';

export default class Address extends Component{
    render() {
        return (
            <img className="avatar img-circle" src={`https://robohash.org/${this.props.email}`} alt="Avatar" height="128px"/>
        )
    }
}

