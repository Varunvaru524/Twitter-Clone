import React, { Component } from 'react';
import TextBox from '../../../../Components/FormElements/TextBox/TextBox';
import './RightSideBar.css'

class RightSideBar extends Component {
    render() { 
        return (
            <div className='rightSidebarContainer'>
                <TextBox placeHolder='Search' />
                <div>Wjats Happening</div>
                <div>Who to follow</div>
            </div>
        );
    }
}
 
export default RightSideBar;