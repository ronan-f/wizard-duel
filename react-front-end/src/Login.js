import React, { Component } from 'react';
import './styles/login.css'
import { Redirect } from 'react-router'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newUser(this.state.user)
    }
    render() {
        return (
        this.props.state.currentUser ? (<Redirect to="/setup"/>) :
            <div>
                <form className='loginForm' onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        <input className='input' type="text" name="name" placeholder='Your name' onChange={(event) => this.setState({user: event.target.value})} />
                    </label>
                    <input type="submit" className='button' value="Alohomora"/>
                </form>
            </div>
        );
    }
}


export default Login;