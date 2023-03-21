import React, { Component } from 'react';
import LeftSidebar from './Components/LeftSideBar/LeftSideBar'
import RightSidebar from './Components/RightSideBar/RightSideBar'
import Feed from './Components/Feed/Feed'
import NotLoggedin from './Components/NotLoggedin/NotLoggedin';
import './homePage.css'

class HomePage extends Component {
    render() {
        return (
            <>
                <main className='homePage'>
                    <div className='homePageLeftSidebar'>
                        <LeftSidebar />
                    </div>
                    <div className="homePageFeed">
                        <Feed />
                    </div>
                    <div className='homePageRightSidebar'>
                        <RightSidebar />
                    </div>
                </main>
                    <NotLoggedin />
            </>
        );
    }
}

export default HomePage;