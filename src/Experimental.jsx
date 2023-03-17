import React, { Component } from 'react';
import TextBox from './Components/FormElements/TextBox/TextBox'
import Btn from './Components/Buttons/MainButton/MainButton'

class Experimental extends Component {
    render() {
        return (
            <>
                <TextBox placeholder='hsaty' />
                <Btn className='primaryButton' inputText='sdsa'/>
            </>
        );
    }
}

export default Experimental; 