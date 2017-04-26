import React, { Component } from 'react'
import { login } from '../api/messaging'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username)
        this.props.history.push('/chatroom')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter your Username" name="username" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default Login