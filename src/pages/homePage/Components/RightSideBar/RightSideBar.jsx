import React, { Component } from 'react';
import './RightSideBar.css'

class RightSideBar extends Component {
    render() { 
        return (
            <div className='rightSidebarContainer'>
                <div>Search</div>
                <div>Wjats Happening</div>
                <div>Who to follow</div>
            </div>
        );
    }
}
 
export default RightSideBar;