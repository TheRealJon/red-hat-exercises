import React, { Component } from 'react';

export default class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    render() {
        return (
            <h1>{this.state.message}</h1>
        )
    }
}
