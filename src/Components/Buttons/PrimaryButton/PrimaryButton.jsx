import React, { Component } from 'react';
import './PrimaryButton.css'

class PrimaryButton extends Component {
    render() {
        let { inputText, ...rest } = this.props

        return (
            <>
                <button {...rest}>{inputText}</button>
            </>
        );
    }
}
export default PrimaryButton;

PrimaryButton.defaultProps = {
    inputText: 'inputText',
}