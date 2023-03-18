import React, { Component } from 'react';
import LeftSidebar from './Components/LeftSideBar/LeftSideBar'
import RightSidebar from './Components/RightSideBar/RightSideBar'
import Feed from './Components/Feed/Feed'

class HomePage extends Component {
    render() {
        return (
            <main>
                <LeftSidebar />
                <Feed />
                <RightSidebar />
            </main>
        );
    }
}

export default HomePage;