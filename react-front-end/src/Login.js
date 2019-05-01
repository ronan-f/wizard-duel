import React, { Component } from 'react';
import './login.css'
import Setup from './Setup.js';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            redirect: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newUser(this.state.user)
        this.setState({redirect: true});
    }
    render() {
        return (
        this.state.redirect ? <Setup state={this.props.state}/> :
            <div>
                <form className='loginForm' onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={(event) => this.setState({user: event.target.value})} />
                    </label>
                    <input type="submit" value="Alohomora" />
                </form>
            </div>
        );
    }
}


export default Login;