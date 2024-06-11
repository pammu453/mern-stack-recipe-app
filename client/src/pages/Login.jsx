import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContest';

const LoginPage = () => {
    const { login } = useContext(StoreContext)
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        login()
        navigate("/")
    };

    return (
        <div className="flex bg-gray-900 pt-20 pb-28 items-center justify-center ">
            <div className=" p-8 bg-slate-700 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">Login</h2>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                    <span>
                        Login with Google
                    </span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;