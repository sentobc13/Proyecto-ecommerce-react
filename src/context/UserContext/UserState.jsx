import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer"


const token = localStorage.getItem("token") || "";

const initialState = {
    token: token,
    user: null,
};

const API_URL = "http://localhost:3000/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        const res = await axios.post(API_URL + "/login", user);
        dispatch({
            type: "LOGIN",
            payload: res.data
        });
        if (res.data) {
            localStorage.setItem("token", res.data.token);
        }
    }
    const getUserInfo = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get(
            API_URL + "/",
            {
                headers: {
                    authorization: token, 
                },
            }
        );
        dispatch ({
            type: "GET_USER_INFO",
            payload: res.data
        })
    }
    return (
        <UserContext.Provider
        value = {{
            token: state.token,
            user: state.user,
            login,
            getUserInfo
        }}
       >
        {children}
       </UserContext.Provider> 
    );
};