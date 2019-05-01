import React, { Component } from 'react';
import './styles/login.css'
class Login extends Component {
    render() {
        return (
            <div className='login'>
                <h2 className='welcomeMessage'>Give your name to choose an army!</h2>
                <form className='loginForm'>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Alohomora" placeholder='Your name'/>
                </form>
            </div>

        );
    }
}


export default Login;