import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Suggestions from '../components/Suggestions';
import { StoreContext } from '../context/StoreContest';

const ViewRecipe = () => {
    const { id } = useParams();
    const { fetchUserData } = useContext(StoreContext)

    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (!token) {
                    alert('Please login to view the recipe');
                    navigate('/');
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                };

                const response = await axios.get(`/api/recipe/view/${id}`, config);
                if (response.status === 200) {
                    setRecipe(response.data);
                    fetchUserData();
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        alert('Not enough coins, redirecting to purchase page');
                        navigate('/purchase-coins');
                    } else if (error.response.status === 404) {
                        alert('Recipe not found');
                        navigate('/recipes');
                    }
                } else {
                    console.error(error);
                }
            }
        };

        fetchRecipe();
    }, [id, token, navigate, fetchUserData]);

    return (

        recipe ? (
            <div className='bg-gray-700'>
                <div className="max-w-4xl bg-gray-700 text-white pt-4 mx-auto p-6  shadow-lg rounded-lg">
                    <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
                    <img className="w-full h-64 object-cover mb-4 " src={recipe.image} alt={recipe.name} />
                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: recipe.details }}></p>
                    <iframe
                        className="w-full h-64 mb-4"
                        src={`https://www.youtube.com/embed/${recipe.video}`}
                        title={recipe.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p className="mb-2"><span className="font-bold">Country:</span> {recipe.country}</p>
                    <p className="mb-2"><span className="font-bold">Category:</span> {recipe.category}</p>
                    <p className="mb-2"><span className="font-bold">Watch Count:</span> {recipe.watchCount}</p>
                    <p className="mb-2"><span className="font-bold">Purchased By:</span> {recipe.purchased_by.length > 0 ?
                        <span>
                            {recipe.purchased_by.join(', ')}
                        </span>
                        : "No one has purchased this"}</p>
                </div>
                <Suggestions recipeId={id} />
            </div>
        ) : (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl">Loading...</div>
            </div>
        )
    );
};

export default ViewRecipe;
