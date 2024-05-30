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

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        try {
            const res = await axios.post(API_URL + "/login", user);
            dispatch({
                type: "LOGIN",
                payload: res.data,
            });

            if (res.data) {
                localStorage.setItem("token", res.data.token);
            }
        } catch (error) {

            console.error(error);
        }
    }

    const register = async (user) => {
        try {
            const res = await axios.post(API_URL + "/", user);
            dispatch({
                type: "REGISTER",
                payload: res.data,
            });

            return res.data

        } catch (error) {

            console.error(error);
        }
    }

    const getUserInfo = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(API_URL + "/",
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            dispatch({
                type: "GET_USER_INFO",
                payload: res.data
            })

        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.delete(API_URL + "/logout",
            {
                headers: {
                    authorization: token,
                },
            });
        dispatch({
            type: "LOGOUT",
            payload: res.data,
        });
        if (res.data) {
            localStorage.removeItem("token");

        }
    }
    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                register,
                getUserInfo,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};