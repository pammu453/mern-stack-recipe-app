import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { StoreContext } from '../context/StoreContest';

const PrivateRoute = () => {
    const { token } = useContext(StoreContext)
    return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute

