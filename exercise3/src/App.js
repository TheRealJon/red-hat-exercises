import React, { Component } from 'react'
import UserList from './components/UserList'
import User from './components/User'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserService from './services/UserService';

export default class App extends Component {
    constructor(props){
        super(props);
        this.services = {
            userService: new UserService("http://jsonplaceholder.typicode.com/users")
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <h1>Exercise 3</h1>
                        <div className="pull-right">
                            <Link to="/users">User List</Link>
                        </div>
                    </header>
                    <div className="container-fluid">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/users" render={props => (<UserList {...props} service={this.services.userService}/>)} />
                        <Route path="/users/:id" render={props => (<User {...props} service={this.services.userService}/>)}/>
                    </div>
                </div>
            </Router>
        )
    }
}
