import React, { Component } from 'react';
import './TextBox.css'

class TextBox extends Component {
    render() {
        let { ...rest } = this.props

        return (
            <input type="text" className='textBox' {...rest} />
        );
    }
}

export default TextBox;