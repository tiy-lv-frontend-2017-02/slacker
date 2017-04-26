import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import styles from './Chatroom.styles'
import {connect} from 'react-redux'
import moment from 'moment'
import {addMessage} from '../api/messaging'

class Chatroom extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            username: this.props.username,
            timestamp: moment().format('LTS'),
            message: this.state.message
        })
        this.setState({
            message: ''
        })
    }

    componentWillMount() {
        if (!this.props.username) {
            this.props.history.push('/')
        }
    }

    componentWillUpdate() {
        var node = this.refs.messages
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = this.refs.messages
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        return (
            <div style={styles.room}>
                <div style={styles.messagesContainer} ref="messages">
                    <ul style={styles.messages}>
                        {this.props.messages.map((msg)=>(
                            <li style={styles.message}>
                                <div>
                                    <Avatar style={styles.avatar} size={30}>{msg.username.charAt(0).toUpperCase()}</Avatar>
                                </div>
                                <div style={styles.messageContainer}>
                                    <div style={styles.timestamp}><span style={styles.username}>{msg.username}</span> {msg.timestamp}</div>
                                    <div>
                                        {msg.message}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={styles.formContainer}>
                    <form onSubmit={this.handleSubmit}>
                        <input style={styles.input} onChange={this.handleChange} name="message" type="text" placeholder="Message the room" value={this.state.message} />
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        messages: appState.messages,
        username: appState.username
    }
}

export default connect(mapStateToProps)(Chatroom)