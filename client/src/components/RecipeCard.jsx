import React from 'react'
import {  useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate()

    const view = () => {
        navigate(`/recipes/${recipe._id}`)
    }

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
                    <p className="text-gray-700">Country: {recipe.country}</p>
                    <p className="text-gray-700">Created by: {recipe.creatorEmail}</p>
                    <p className="text-gray-700">Purchased by: {recipe.purchased_by.length} people</p>
                    <button onClick={view} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded">
                        View Detail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
