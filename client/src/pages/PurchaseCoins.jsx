import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../context/StoreContest';


const PurchaseCoins = () => {
    const { fetchUserData } = useContext(StoreContext)
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');

    const handlePurchase = async (coins, price) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };

            const confirmed = window.confirm(`Do you want to purchase ${coins} coins for $${price}?`);
            if (confirmed) {
                await axios.post(`/api/recipe/coins/purchase`, { coins }, config);
                alert('Purchase successful! Coins added to your account.');
                navigate('/recipes');
                fetchUserData();
            }
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Purchase Coins</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                    className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600"
                    onClick={() => handlePurchase(100, 1)}
                >
                    Buy 100 coins for $1
                </button>
                <button
                    className="bg-green-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-green-600"
                    onClick={() => handlePurchase(500, 5)}
                >
                    Buy 500 coins for $5
                </button>
                <button
                    className="bg-red-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-red-600"
                    onClick={() => handlePurchase(1000, 10)}
                >
                    Buy 1000 coins for $10
                </button>
            </div>
        </div>
    );
};

export default PurchaseCoins;
