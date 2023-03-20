import React, { Component } from 'react';
import twitterLogo from '../../Assets/Twitter-logo.svg.png'
import TextBox from '../../Components/FormElements/TextBox/TextBox'
import MainButton from '../../Components/Buttons/MainButton/MainButton'
import './Signup.css'


class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className='twitterLogo'><img src={twitterLogo} alt="Twitter Logo" width='40px' /></div>
                    <div className="signupPageContainer">
                        <div className='signupPage'>
                            <h1>Join Twitter Today</h1>
                            <h3>Name</h3>
                            <div className='signupNameContainer'>
                                <TextBox placeholder='Enter First Name' autoFocus />
                                <TextBox placeholder='Enter Last Name' />
                            </div>
                            <h3>Username</h3>
                            <TextBox placeholder='Enter Username' />
                            <h3>Email</h3>
                            <TextBox placeholder='Enter Email' />
                            <h3>Password</h3>
                            <TextBox placeholder='Enter Password' />
                            <h3>Confirm Password</h3>
                            <TextBox placeholder='Confirm Password' />
                            <MainButton className='primaryButton' inputText='Create Account' />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;