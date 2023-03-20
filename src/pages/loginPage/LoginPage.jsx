import React, { Component } from 'react';
import Joi from 'joi-browser'
import TextBox from '../../Components/FormElements/TextBox/TextBox'
import MainButton from '../../Components/Buttons/MainButton/MainButton'
import twitterLogo from '../../assets/Twitter-logo.svg.png'
import './LoginPage.css'


class Login extends Component {
    state = {
        userInfo: { email: '', password: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().email().label('Email').required(),
        password: Joi.string().label('Password').required()
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
            console.log('Loged in Successfully');
        }
    }

    render() {
        let { email, password} = this.state.userInfo
        let { email: errorEmail, password: errorPassword } = this.state.errors

        return (
            <React.Fragment>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='twitterLogo'><img src={twitterLogo} alt="Twitter Logo" width='40px' /></div>
                    <div className="loginPageContainer">
                        <div className='loginPage'>
                            <h1>Login to Twitter</h1>
                            <h3>Email</h3>
                            <TextBox autoFocus placeholder='Enter Email' name='email' onChange={(e) => this.handleChange(e)} value={email} />
                            <p className='loginPageError'>{errorEmail}</p>
                            <h3>Password</h3>
                            <TextBox placeholder='Enter Password' name='password' onChange={(e) => this.handleChange(e)} value={password} />
                            <p className='loginPageError'>{errorPassword}</p>
                            <MainButton className='primaryButton' inputText='Login' />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;