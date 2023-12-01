import axios from 'axios';

// user sign up by email and id
const userSignUp = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_LOGIN_API_KEY}api/register`, userData);
        return { success: true, data: response?.data };
    } catch (error) {
        console.error(error);
        return { success: false, data: {} }

    }
}

// user sign in by email and id
const userSignIn = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_LOGIN_API_KEY}api/login`, userData);
        return { success: true, data: response?.data };
    } catch (error) {
        console.error(error);
        return { success: false, data: {} }

    }
}


export { userSignUp, userSignIn }