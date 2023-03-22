import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import TweetButton from '../../../../Components/Buttons/MainButton/MainButton'
import logo from '../../../../assets/Twitter-logo.png'
import './LeftSideBar.css'

class LeftSideBar extends Component {
    render() {
        const token = localStorage.getItem('jwtToken')
        if (token) {
            var { firstName, userName } = jwtDecode(token)
        }

        return (
            <div className='leftSidebarContainer'>
                <div className='leftSidebarContainerTop'>
                    <div className='leftSidebarElementsContainer'>
                        <div className="leftSidebarElements">
                            <i className="fa-brands fa-twitter fa-2x"></i>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <div className='leftSidebarElements'>
                            <i className="fa-solid fa-house fa-lg" ></i>
                            <span>Home</span>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <div className='leftSidebarElements'>
                            <i className="fa-solid fa-hashtag fa-lg"></i>
                            <span>Explore</span>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <div className='leftSidebarElements'>
                            <i className="fa-solid fa-bell fa-lg"></i>
                            <span>Notifications</span>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <div className='leftSidebarElements'>
                            <i className="fa-solid fa-envelope fa-lg"></i>
                            <span>Messages</span>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <div className='leftSidebarElements'>
                            <i className="fa-solid fa-bookmark fa-lg"></i>
                            <span>Bookmarks</span>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <div className='leftSidebarElements'>
                            <i className="fa-solid fa-user fa-lg"></i>
                            <span>Profile</span>
                        </div>
                    </div>
                    <div className='leftSidebarElementsContainer'>
                        <TweetButton className='tweetButton' inputText='Tweet' />
                    </div>
                </div>
                {token && (
                    <div className='leftSidebarContainerBottom'>
                        <img src={logo} alt="Profile" />
                        <p>{firstName}</p>
                        <span>{'@' + userName}</span>
                    </div>
                )}
            </div>
        );
    }
}

export default LeftSideBar;