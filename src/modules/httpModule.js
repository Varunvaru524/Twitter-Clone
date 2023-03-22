import axios from "axios";
import jwtDecode from "jwt-decode";
import {toast} from 'react-toastify'

// Api Endpoints
const signupApi = process.env.REACT_APP_API_SIGNUP
const loginApi = process.env.REACT_APP_API_LOGIN

// Interseptor
axios.interceptors.response.use(null,(error)=>{
    if (error.response) {
        toast.error(error.response.data)
    }
    else{
        toast.error(error.message)
    }
})

// Http Requests
async function httpSignup(payload) {
    return await axios.post(signupApi,payload)
}

async function httpLogin(payload) {
    const token =  await axios.post(loginApi,payload)
    try {
        jwtDecode(token)
        return token.data
    } catch (error) {
        toast.error('Invalid Token')
    }
}

export {
    httpSignup,
    httpLogin
}