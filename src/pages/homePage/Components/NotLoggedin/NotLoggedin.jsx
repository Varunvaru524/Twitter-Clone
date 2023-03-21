import React, { Component } from 'react';
import Button from '../../../../Components/Buttons/MainButton/MainButton'
import style from './NotLoggedin.module.css'

class NotLoggedin extends Component {
    handleLoginNavigate(){
        this.props.navigate('/login')
    }
    handleSignupNavigate(){
        this.props.navigate('/signup')
    }

    render() {
        return (
            <div className={style.notLoggedinContainer}>
                <div className={style.textContainer}>
                    <p>Don't miss what's happening</p>
                    <p>People on twitter are the first to know.</p>
                </div>
                <div className={style.notLoggedinButtonsContainer}>
                    <Button className='secondaryButton' inputText='Login' onClick={()=>this.handleLoginNavigate()} />
                    <Button className='primaryButton' inputText='Sign up' onClick={()=>this.handleSignupNavigate()} />
                </div>
            </div>
        );
    }
}

export default NotLoggedin;