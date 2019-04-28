import React, { Component } from 'react';
import './login.css'

class Login extends Component {
    render() {
        return (
            <div>
                <h2 className='welcomeMessage'>Enter your name to begin...</h2>
                <form className='loginForm'>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Alohomora" />
                </form>

            </div>

        );
    }
}


export default Login;