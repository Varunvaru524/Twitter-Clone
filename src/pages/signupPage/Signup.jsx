import React, { Component } from 'react';
import Joi from 'joi-browser'
import TextBox from '../../Components/FormElements/TextBox/TextBox'
import MainButton from '../../Components/Buttons/MainButton/MainButton'
import twitterLogo from '../../Assets/Twitter-logo.svg.png'
import './Signup.css'


class Login extends Component {
    state = {
        userInfo: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    }

    schema = {
        firstName: Joi.string().min(0).max(15).required(),
        lastName: Joi.string().min(0).max(15).required(),
        userName: Joi.string().min(0).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(20).required(),
        confirmPassword: Joi.ref('password')
    }

    handleValidation() {
        let result = Joi.validate(this.state.userInfo, this.schema, { abortEarly: false })

        if (result.error) {
            let updatedErrors = {}

            result.error.details.forEach(item => {
                updatedErrors[item.context.key] = item.message
            })
            this.setState({ errors: updatedErrors })
            return false
        }
        else {
            return true
        }
    }

    handleChange({ currentTarget }) {
        let { name, value } = currentTarget
        let updatedUserInfo = this.state.userInfo
        updatedUserInfo[name] = value
        this.setState({ userInfo: updatedUserInfo })
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.handleValidation()) {
            // Call Backend
            this.setState({errors:{}})
            console.log('Calling Backend');
        }
    }

    render() {
        let { firstName, lastName, userName, email, password, confirmPassword } = this.state.userInfo
        let { firstName: errorFirstName, lastName: errorLastName, userName: errorUserName, email: errorEmail, password: errorPassword, confirmPassword: errorConfirmPassword } = this.state.errors

        return (
            <React.Fragment>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='twitterLogo'><img src={twitterLogo} alt="Twitter Logo" width='40px' /></div>
                    <div className="signupPageContainer">
                        <div className='signupPage'>
                            <h1>Join Twitter Today</h1>
                            <h3>Name</h3>
                            <div className='signupNameContainer'>
                                <TextBox autoFocus placeholder='Enter First Name' name='firstName' onChange={(e) => this.handleChange(e)} value={firstName} />
                                <TextBox placeholder='Enter Last Name' name='lastName' onChange={(e) => this.handleChange(e)} value={lastName} />
                            </div>
                            <p className='signinPageError'>{errorFirstName}</p>
                            <p className='signinPageError'>{errorLastName}</p>
                            <h3>Username</h3>
                            <TextBox placeholder='Enter Username' name='userName' onChange={(e) => this.handleChange(e)} value={userName} />
                            <p className='signinPageError'>{errorUserName}</p>
                            <h3>Email</h3>
                            <TextBox placeholder='Enter Email' name='email' onChange={(e) => this.handleChange(e)} value={email} />
                            <p className='signinPageError'>{errorEmail}</p>
                            <h3>Password</h3>
                            <TextBox placeholder='Enter Password' name='password' onChange={(e) => this.handleChange(e)} value={password} />
                            <p className='signinPageError'>{errorPassword}</p>
                            <h3>Confirm Password</h3>
                            <TextBox placeholder='Confirm Password' name='confirmPassword' onChange={(e) => this.handleChange(e)} value={confirmPassword} />
                            <p className='signinPageError'>{errorConfirmPassword}</p>
                            <MainButton className='primaryButton' inputText='Create Account' />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;