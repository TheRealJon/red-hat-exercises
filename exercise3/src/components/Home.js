import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component{
    render() {
        return (
            <h1>
                <Link to="/users">View User List</Link>
            </h1>
        )
    }
}

