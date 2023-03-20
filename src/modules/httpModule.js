import axios from "axios";

// Api Endpoints
const signupApi = 'http://localhost:3900/api/signup'
const loginApi = 'http://localhost:3900/api/login'

// Interseptor
axios.interceptors.response.use(null,(error)=>{
    console.log('Response Error',error);
})

// Http Requests
async function httpSignup(payload) {
    return await axios.post(signupApi,payload)
}

export {
    httpSignup
}