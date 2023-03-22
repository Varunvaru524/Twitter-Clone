import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import RouterHooks from './Components/HigherOrderComponents/RouterHooks';
import HomePage from './pages/homePage/homePage'
import LoginPage from './pages/loginPage/LoginPage'
import SignupPage from './pages/signupPage/Signup'
import NotfoundPage from './pages/notfoundPage/Notfound'
import ExperimentalPage from './Experimental'
import 'react-toastify/dist/ReactToastify.css'; 


class App extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path='/signup' element={<RouterHooks Component={SignupPage} />} />
                <Route path='/login' element={<RouterHooks Component={LoginPage} />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='*' element={<NotfoundPage />} />
                <Route path='/experimental' element={<ExperimentalPage />} />
            </Routes>
            <ToastContainer/>
            </>
        );
    }
}

export default App;