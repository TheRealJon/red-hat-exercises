import React, { Component } from 'react';
// import axios from 'axios';

export default class Address extends Component{
    render() {
        return (
            <div className="address">
                {this.props.address.street}<br/>
                {this.props.address.suite}<br/>
                {this.props.address.city}, {this.props.address.state} {this.props.address.zipcode}
                { this.props.showGeo &&
                    <div className="coordinates">
                        <i className="fa fa-compass"></i> <samp>{this.props.address.geo.lat}, {this.props.address.geo.lng}</samp>
                    </div>
                }
            </div>
        )
    }
}

