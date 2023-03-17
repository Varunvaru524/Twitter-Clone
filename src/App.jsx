import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'
import SignupPage from './pages/signupPage/Signup'
import NotfoundPage from './pages/notfoundPage/Notfound'
import ExperimentalPage from './Experimental'


class App extends Component {
    render() {
        return (
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/experimental' element={<ExperimentalPage />} />
                <Route path='*' element={<NotfoundPage />} />
            </Routes>
        );
    }
}

export default App;