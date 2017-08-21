import Error from "./Error"
import Loading from "./Loading"
import React, { Component } from 'react';
import UserDetails from "./UserDetails"

export default class User extends Component{
    constructor(props) {
        super(props);
        this.service = props.service;
        this.state = {
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        var self = this;
        this.service.getUser(this.props.match.params.id, function(err, user){
            if(err){
                self.setState({
                    loading: false,
                    error: true,
                    reason: err.message
                });
            } else {
                self.setState({
                    loading: false,
                    user: user
                });
            }
        });
    }

    render() {
        let view = null;
        if (this.state.loading) {
            view = <Loading message="Loading user details..."/>
        } else if (this.state.error) {
            view = <Error heading="Failed to load user." message={this.state.reason}/>
        } else {
            view = <UserDetails user={this.state.user} tableRow={this.props.tableRow}/>
        }
        return view;
    }
}
