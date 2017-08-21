import React, { Component } from 'react';

export default class Company extends Component{
    render() {
        return (
            <div className="company">
                {this.props.company.name}<br/>
                <em>"{this.props.company.catchPhrase}"</em><br/>
                {this.props.company.bs}
            </div>
        )
    }
}

