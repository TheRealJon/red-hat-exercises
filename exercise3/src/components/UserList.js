import React, { Component } from 'react'
import UserDetails from './UserDetails'
import Error from './Error'
import Loading from './Loading'

export default class UserList extends Component{

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
        this.service.getAllUsers(function(err,users){
            if(err){
                console.log(err);
                self.setState({
                    loading: false,
                    error: true,
                    reason: err.message
                });
            } else {
                self.setState({
                    loading: false,
                    users: users
                });
            }
        });
    }

    render() {
        if(this.state.loading){
            return <Loading message="Loading user list..." />
        }

        if(this.state.error){
            return <Error Heading="User list failed to load." message={this.state.reason} />
        }

        return (
            <div className="user-list">
                <h1>User List</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Username </th>
                            <th> Email </th>
                            <th> Address </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(function(user){
                                return (
                                    <UserDetails key={user.id} user={user} tableRow={true}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

