import React, { Component } from 'react';

export default class Error extends Component{
    constructor(props) {
        super(props);
        this.state = {
            heading: this.props.heading,
            message: this.props.message
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.heading}
                </h1>
                <p className="lead text-danger">
                    {this.state.message}
                </p>
            </div>
        )
    }
}
