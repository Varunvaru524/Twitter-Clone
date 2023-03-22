import axios from "axios";
import {toast} from 'react-toastify'

// Api Endpoints
const signupApi = process.env.REACT_APP_API_SIGNUP
const loginApi = process.env.REACT_APP_API_LOGIN

// Interseptor
axios.interceptors.response.use(null,(error)=>{
    toast.error(error.response.data)
})

// Http Requests
async function httpSignup(payload) {
    return await axios.post(signupApi,payload)
}
async function httpLogin(payload) {
    return await axios.post(loginApi,payload)
}

export {
    httpSignup,
    httpLogin
}