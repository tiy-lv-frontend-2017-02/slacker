import React, { Component } from 'react'
import { login } from '../api/messaging'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username, this.state.password)
        this.props.history.push('/chatroom')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter your Username" type="text" name="username" onChange={this.handleChange} />
                    <input placeholder="Enter your password" type="password" name="password" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login