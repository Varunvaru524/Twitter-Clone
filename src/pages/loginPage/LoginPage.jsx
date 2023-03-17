import React, { Component } from 'react';
import twitterLogo from '../../Assets/Twitter-logo.svg.png'
import TextBox from '../../Components/FormElements/TextBox/TextBox'
import MainButton from '../../Components/Buttons/MainButton/MainButton'
import './LoginPage.css'


class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className='twitterLogo'><img src={twitterLogo} alt="Twitter Logo" width='40px' /></div>
                    <div className="loginPageContainer">
                        <div className='loginPage'>
                            <h1>Login to Twitter</h1>
                            <h3>Email</h3>
                            <TextBox placeholder='Enter Email' autoFocus />
                            <h3>Password</h3>
                            <TextBox placeholder='Enter Password' />
                            <MainButton className='primaryButton' inputText='Login' />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;