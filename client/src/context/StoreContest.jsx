import { createContext, useState } from 'react'
import { auth, googleProvider } from '../firebase';
import axios from "axios"


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [user, setUser] = useState(null);
    const token = localStorage.getItem('authToken');

    const login = async () => {
        try {
            const result = await auth.signInWithPopup(googleProvider);
            const token = await result.user.getIdToken();
            localStorage.setItem('authToken', token);

            const response = await axios.post(`/api/user/login`, { token });

            setUser(response.data);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                const response = await axios.post(`/api/user/login`, { token });
                setUser(response.data);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            localStorage.removeItem('authToken');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const contextValue = {
        login,
        fetchUserData,
        user,
        logout,
        setUser,
        token
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
