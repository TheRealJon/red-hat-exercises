import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Address from "./Address"
import Company from "./Company"
import Avatar from "./Avatar"

export default class UserDetails extends Component{
    render() {
        if(this.props.tableRow){
            return (
                <tr key={this.props.user.id}>
                    <td>
                        <Link to={`/users/${this.props.user.id}`}>{this.props.user.name}</Link>
                    </td>
                    <td>{this.props.user.username}</td>
                    <td>{this.props.user.email}</td>
                    <td>
                        <Address address={this.props.user.address} showGeo={false}/>
                    </td>
                </tr>
            )
        }
        return (
            <div className="user-details container-fluid">
                <div className="row">
                    <div className="col-xs-1">
                        <Avatar email={this.props.user.email}/>
                    </div>
                    <div className="col-xs-11">
                        <div className="row">
                            <h1>{this.props.user.name}</h1>
                        </div>
                        <div className="row details">
                            <ul className="fa-ul spaced">
                                <li><i className="fa-li fa fa-twitter"></i> @{this.props.user.username}</li>
                                <li><i className="fa-li fa fa-globe"></i> {this.props.user.website}</li>
                                <li><i className="fa-li fa fa-envelope"></i> {this.props.user.email}</li>
                                <li><i className="fa-li fa fa-phone"></i> {this.props.user.phone}</li>
                                <li><i className="fa-li fa fa-map-marker"></i> <Address address={this.props.user.address} showGeo={true} /></li>
                                <li><i className="fa-li fa fa-briefcase"></i> <Company company={this.props.user.company}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
