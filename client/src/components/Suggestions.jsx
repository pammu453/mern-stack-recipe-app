import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Suggestions = ({ recipeId }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`/api/recipe/suggestions/${recipeId}`);
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, [recipeId]);

    return (
        <div className="container mx-auto p-4 bg-gray-700 text-white">
            <h2 className="text-2xl font-bold mb-4 w-52 mx-auto text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    recipes.length === 0 ? (
                        <div className="text-white w-52 mx-auto text-center">
                            <p className="w-52 mx-auto text-center">No recipes smiler to above...</p>
                        </div>
                    ) : (
                        recipes.map((recipe) => (
                            <div key={recipe._id} className="shadow-md rounded-md overflow-hidden bg-gray-700 text-white">
                                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                                    <p className=" mb-1">Country: {recipe.country}</p>
                                    <p className="mb-1">Created by: {recipe.creatorEmail}</p>
                                    <p className="mb-1">Purchased by: {recipe.purchased_by.length} people</p>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Suggestions;
