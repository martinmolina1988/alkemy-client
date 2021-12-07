import JwtDecode from "jwt-decode";
import Axios from "axios";

const TOKEN = "token";
const API_HOST = "http://localhost:4000";



export async function signUpApi(user) {

    const userTemp = {
        ...user,
        email: user.email.toLowerCase(),
    };
    delete userTemp.repeatPassword;



    try {
        const response = await Axios({
            url: `${API_HOST}/register`,

            method: "POST",
            data: userTemp
        })
        return response;
    } catch (e) {
        console.log(e)
    }
}

export async function signInApi(user) {
    const data = {
        ...user, email: user.email.toLowerCase(),
    };
    try {
        const response = await Axios({
            url: `${API_HOST}/login`,

            method: "POST",
            data: data
        })
        return response;
    } catch (e) {
        console.log(e)
    }   
}

export function setTokenApi(token) {
    localStorage.setItem(TOKEN, token);
}
export function getTokenApi() {
    return localStorage.getItem(TOKEN);
}

export function logoutApi() {
    localStorage.removeItem(TOKEN);

}

export function isUserLogedApi() {
    const token = getTokenApi();

    if (!token) {
        logoutApi();
        return null;
    }

    if (isExpired(token)) {
        logoutApi();
    } else {
        return JwtDecode(token);
    }
}


function isExpired(token) {
    const { exp } = JwtDecode(token);
    const expire = exp * 1000;
    const timeOut = expire - Date.now();

    if (timeOut < 0) {
        return true;
    } else {
        return false;
    }

}