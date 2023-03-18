import React, { Component } from 'react';
import TweetButton from './Components/Buttons/MainButton/MainButton'

class Experimental extends Component {
    render() {
        return (
            <>
            <TweetButton  inputText='Tweet' className="tweetButton"/>
            <TweetButton  className="primaryButton"/>
            <TweetButton  className="secondaryButton"/>
            </>
        );
    }
}

export default Experimental; 